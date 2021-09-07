const mysql = require("mysql2/promise");
const link = require("../settings/db");

class patientsService {
  async addPatient(obj1, obj2) {
    const id_user=obj1.id;
    const {fname, sname, mname, dateOfBirth, locality, adress}=obj2;
    try {
      const db = await mysql.createConnection({ ...link });
      const sql = "INSERT INTO `patients` (`fname`,`sname`,`mname`,`dateOfBirth`,`locality`,`adress`,`id_user`) VALUES(?,?,?,?,?,?,?)";
      const result = await db.query(sql, [fname, sname, mname, dateOfBirth, locality, adress, id_user]);
      return result.instedID;
    } catch (e) {
      throw e;
    }
  }

  async getAllPatients(obj) {
    const id_user=obj.id;
    try {
      const db = await mysql.createConnection({ ...link });
      const sql = "SELECT * FROM `patients` WHERE id_user=? ORDER BY sname";
      const result = await db.query(sql, [id_user]);
      return result[0];
    } catch (e) {
      throw new e;
    }
  }

  async getPatient(id) {
    try {
      const db = await mysql.createConnection({ ...link });
      const sql = "SELECT * FROM `patients` WHERE id=?";
      const result = await db.query(sql, [id]);
      return result[0];
    } catch (e) {
      throw e;
    }
  }

  async editPatient(obj) {
    const {fname, sname, mname, dateOfBirth, locality, adress, id}=obj;
    try {
      const db = await mysql.createConnection({ ...link });
      const sql = "UPDATE `patients` SET `fname`=?, `sname`=?, `mname`=?,`dateOfBirth`=?, `locality`=?, `adress`=?   WHERE `id`=?";
      await db.query(sql, [fname, sname, mname, dateOfBirth, locality, adress, id]);
      return "Success";
    } catch (e) {
      throw e;
    }
  }

  async removePatient(id) {
    try {
      const db = await mysql.createConnection({ ...link });
      const sql = "DELETE FROM `patients` WHERE id=?";
      await db.query(sql, [id]);
      return "Success";
    } catch (e) {
      throw e;
    }
  }
}
module.exports = new patientsService();
