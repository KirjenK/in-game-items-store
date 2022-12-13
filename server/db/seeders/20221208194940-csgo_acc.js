/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Аккаунт',
          price: 10,
          GameId: 1,
          CategoryId: 1,
          image: 'public/images/acc_csgo_2131.webp',
          description: 'Аккаунт с медалями 5 и 10 лет службы',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Аккаунт',
          price: 25,
          GameId: 1,
          CategoryId: 1,
          image: 'public/images/csgo322.jpeg',
          description: '❤️❤️✔️✔️FACEIT АККАУНТ С ПОДТВЕРЖДЕННЫМ НОМЕРОМ❤️❤️✔️✔️',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Аккаунт',
          price: 20,
          GameId: 1,
          CategoryId: 1,
          image: 'public/images/cs_ak1.jpg',
          description: 'Есть Прайм кучу кейсов срочная продажа нужны деньги',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Аккаунт',
          price: 15,
          GameId: 1,
          CategoryId: 1,
          image: 'public/images/cs_ak2.jpg',
          description: '💎𝘾𝙎 𝙂𝙊 𝙋𝙧𝙞𝙢𝙚 + другие игры💎💘Distinguished Master Guardian💘♐2.400+ ЧАСОВ♐⚡РОДНАЯ ПОЧТА⚡😈Биг стар😈',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Аккаунт',
          price: 30,
          GameId: 1,
          CategoryId: 1,
          image: 'public/images/cs_ak3.jpg',
          description: 'АККАУНТ ДЛЯ КИБЕРСПОРТА/MM/FACEIT 100+ ЧАСОВ РОДНАЯ ПОЧТА',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Аккаунт',
          price: 17,
          GameId: 1,
          CategoryId: 1,
          image: 'public/images/cs_ak4.jpg',
          description: 'Скидка🏷✨2 медали✨🔥Инвентарь 100р🟢Топ игры🟢',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Аккаунт',
          price: 14,
          GameId: 1,
          CategoryId: 1,
          image: 'public/images/cs_ak5.jpg',
          description: '🔥Есть прайм🔥⭐100% будет либо инвентарь, медали, звания или игры⭐',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Аккаунт',
          price: 30,
          GameId: 1,
          CategoryId: 1,
          image: 'public/images/cs_ak6.jpg',
          description: 'АККАУНТ ДЛЯ КИБЕРСПОРТА/MM/FACEIT 100+ ЧАСОВ РОДНАЯ ПОЧТА',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
