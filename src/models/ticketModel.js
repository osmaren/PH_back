import knex from "../database";

class Ticket {
  static async findAll() {
    const tickets = await knex('tickets');
    return tickets;
  }

  static async create({ unit, quantity, price, duration }) {
    const ticket = await knex('tickets')
      .insert({ unit, quantity, price, duration })
      .returning(['unit', 'quantity', 'price', 'duration']);
    return ticket;
  }

  static async findPeoplePerUnit(start, end) {
    const people = await knex('tickets')
      .select('unit', 'quantity')
      .whereBetween('created_at', [start, end])
      .groupBy('unit', 'created_at', 'quantity')
      .orderBy('unit');
    return people;
  }

  static async findRevenuePerUnit(start, end) {
    const revenue = await knex('tickets')
      .select(knex.raw('unit, sum(price) as revenue'))
      .whereBetween('created_at', [start, end])
      .groupBy('unit')
      .orderBy('unit');
    return revenue;
  }

  static async findTicketsPerHour(start, end) {
    const hours = await knex('tickets')
      .select(knex.raw('unit, TO_CHAR(DATE_TRUNC(\'hour\', created_at), \'HH24 DD/MM/YY\') as hour, count(*) as tickets'))
      .whereBetween('created_at', [start, end])
      .groupBy('unit', 'hour')
      .orderBy('unit', 'hour');
    return hours;

  }
}

export default Ticket;