const mysql = require("mysql2/promise");
const link = require("../settings/db");
class clinicService {
  async getDepartments() {
    try {
      const db = await mysql.createConnection({ ...link });
      const sql = "SELECT * FROM `departments`";
      const arr = await db.query(sql);
      return arr[0];
    } catch (e) {
      throw e;
    }
  }
  async getDoctorsAll() {
    try {
      const db = await mysql.createConnection({ ...link });
      const sql = "SELECT d.id, d.sname, d.fname, d.mname, d.id_spec, d.room, s.speciality FROM doctors d" +
      " LEFT JOIN speciality s ON d.id_spec=s.id" +
      " ORDER BY d.sname";
      const arr = await db.query(sql);
      return arr[0];
    } catch (e) {
      throw e;
    }
  }
  async getTickets(obj) {
    const {id, date} = obj;
    try {
      const db = await mysql.createConnection({ ...link });
      const sql = "SELECT * FROM `tickets` t WHERE t.id_doctor=? && date_ticket=? && t.priznak=0 ";
      const result = await db.query(sql, [id, date]);
      return result[0];
    } catch (e) {
      throw e;
    }
  }
  /*async getActiveDoctors(obj) {
    const id_spec = obj.id;
    console.log(obj)
    try {
      const db = await mysql.createConnection({ ...link });
      const sql ="SELECT DISTINCT d.id, d.sname, d.fname,d.mname, d.room, d.id_spec, t.priznak FROM doctors d" +
      " LEFT JOIN tickets t ON d.id=t.id_doctor && t.priznak=0" +
      " LEFT JOIN speciality s ON d.id_spec=s.id" +
      " WHERE d.id_spec=? && t.priznak IS NOT NULL" +
      " ORDER BY d.sname"
     /* const sql="SELECT d.id, d.sname, d.fname, d.mname, t.id_ticket, t.priznak, t.date_ticket, t.time, s.speciality" +
          "  FROM doctors d" +
          "  LEFT JOIN tickets t ON d.id=t.id_doctor" +
          "  LEFT JOIN speciality s ON d.id_spec=s.id" +
          "  WHERE d.id_spec=?"
      const result = await db.query(sql, [id_spec]);
      return result[0];
    } catch (e) {
      throw e;
    }
  }*/
  async getSpeciality() {
    try {
      const db = await mysql.createConnection({ ...link });
      const sql = "SELECT * FROM `speciality`";
      const result = await db.query(sql);
      return result[0];
    } catch (e) {
      throw e;
    }
  }
}
module.exports = new clinicService();
