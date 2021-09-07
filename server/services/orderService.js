const mysql = require("mysql2/promise");
const link = require("../settings/db");

class orderService {
  async getAllOrders(obj) {
    const id_user = obj.id;
    try {
      const db = await mysql.createConnection({ ...link });
      const sql =
         "SELECT o.id as id_order, o.date_order, t.id_ticket, t.date_ticket, t.time, " +
         " d.sname AS sname_doctor, d.fname AS fname_doctor, d.mname AS mname_doctor, s.speciality," +
          " p.id AS id_patient, p.sname AS sname_patient, p.fname AS fname_patient, p.mname AS mname_patient" +
          " FROM orders o" +
          " LEFT JOIN tickets t ON o.id_ticket=t.id_ticket" +
          " LEFT JOIN doctors d ON t.id_doctor=d.id" +
          " LEFT JOIN speciality s ON d.id_spec=s.id" +
          " LEFT JOIN patients p ON o.id_patient=p.id" +
          " WHERE o.id_user=?"
      const result = await db.query(sql, [id_user]);
      return result[0];
    } catch (e) {
      throw e;
    }
  }
  async addOrder(obj) {
    const { date_order, id_user, id_patient, id_ticket } = obj;
    try {
      const db = await mysql.createConnection({ ...link });
      const sql1 =
        "INSERT INTO `orders` (`date_order`,`id_user`, id_patient, id_ticket) VALUES(?,?,?,?)";
      const sql2 = "UPDATE `tickets` SET `priznak`=1 WHERE id_ticket=? ";
      await db.query(sql1, [date_order, id_user, id_patient, id_ticket]);
      await db.query(sql2, [id_ticket]);
      return "isSuccess";
    } catch (e) {
      throw e;
    }
  }
  async removeOrder(obj) {
    const { id_order, id_ticket } = obj;
    try {
      const db = await mysql.createConnection({ ...link });
      const sql1 = "DELETE FROM `orders` WHERE id=?";
      const sql2 = "UPDATE `tickets` SET `priznak`=0 WHERE id_ticket=? ";
      await db.query(sql1, [id_order]);
      await db.query(sql2, [id_ticket]);
      return "isSuccess";
    } catch (e) {
      throw e;
    }
  }
}
module.exports = new orderService();
