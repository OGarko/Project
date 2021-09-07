const mysql = require("mysql2/promise");
const link = require("../settings/db");
const bcrypt = require("bcrypt");

class authService {
  async addAccount(obj) {
    const { email, password } = obj;
    try {
      const db = await mysql.createConnection({ ...link });
      const sql1 = "SELECT * FROM `users` WHERE email=?";
      const result = await db.query(sql1, [email]);
      if (result[0].length) {
        throw new Error("Пользователь с таким email уже существует");
      }
      const hashPassword = await bcrypt.hash(password, 3);
      const sql2 =
        "INSERT INTO `users` (`email`, `password`) VALUES (?,?)";
      await db.query(sql2, [email, hashPassword]);
      return "isSuccess";
    } catch (e) {
      throw e;
    }
  }
  async getAccount(obj) {
    const { email, password } = obj;
    try {
      const db = await mysql.createConnection({ ...link });
      const sql1 = "SELECT * FROM `users` WHERE email=?";
      const [result, fields] = await db.query(sql1, [email]);
      if (!result.length) {
        throw new Error("Неверный email");
      }
      const isValidPassword = await bcrypt.compare(
        password,
        result[0].password
      );
      if (isValidPassword) {
        return result[0]
      } else {
        throw new Error("Неверный пароль");
      }
    } catch (e) {
      throw e;
    }
  }
}
module.exports = new authService();
