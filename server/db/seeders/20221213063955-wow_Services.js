/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: '60 минут обучения',
          price: 10,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: '60 минут обучения WoW 3.3.5 📖📘📕',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Прокачка акаунтов',
          price: 15,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: '❗[Тест бесплатно]⭐[Авто PvE]⭐[Все КЛАССЫ]⭐[Все СПЕЦИАЛИЗАЦИИ]⭐[1 КЛАСС]⭐[Поддержка Т4/Т5]❗',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Аддон RestedXP',
          price: 15,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: '✅✅✅Аддон RestedXP и Zygor для молниеносной прокачки в DF и Фарма золота + Автообновление✅✅✅',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Прокачка',
          price: 12,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: '❗Подписка на [ВСЕ КЛАССЫ] ⭐DarhangeR Rotations ©⭐❗',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '🔥 RestedXP 🔥',
          price: 50,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: '⭐WoW Byster [Авто PvE] - [Информация в описании] [Тест бесплатно]⭐',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Цлк 25 об Рс 25 об',
          price: 30,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: '[Sirus.su Scourge x2] Быстрый Старт',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'По фармлю',
          price: 25,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: 'Мгновенная прокачка с 1 по 90 уровень',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '⌛АВТОВЫДАЧА⌛',
          price: 10,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: '☑️После оплаты вы сборник фарма золота⚡Выдача происходит в автоматическом режиме(ЕСЛИ Я ОНЛАЙН).Вам стоит только оплатить заказ, и вы сразу получите товар)',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '60 минут обучения',
          price: 10,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: '60 минут обучения WoW 3.3.5 📖📘📕',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Прокачка акаунтов',
          price: 15,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: '❗[Тест бесплатно]⭐[Авто PvE]⭐[Все КЛАССЫ]⭐[Все СПЕЦИАЛИЗАЦИИ]⭐[1 КЛАСС]⭐[Поддержка Т4/Т5]❗',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Аддон RestedXP',
          price: 15,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: '✅✅✅Аддон RestedXP и Zygor для молниеносной прокачки в DF и Фарма золота + Автообновление✅✅✅',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Прокачка',
          price: 12,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: '❗Подписка на [ВСЕ КЛАССЫ] ⭐DarhangeR Rotations ©⭐❗',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '🔥 RestedXP 🔥',
          price: 50,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: '⭐WoW Byster [Авто PvE] - [Информация в описании] [Тест бесплатно]⭐',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Цлк 25 об Рс 25 об',
          price: 30,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: '[Sirus.su Scourge x2] Быстрый Старт',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'По фармлю',
          price: 25,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: 'Мгновенная прокачка с 1 по 90 уровень',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '⌛АВТОВЫДАЧА⌛',
          price: 10,
          GameId: 2,
          CategoryId: 3,
          image: 'public/images/wow_servic.jpg',
          description: '☑️После оплаты вы сборник фарма золота⚡Выдача происходит в автоматическом режиме(ЕСЛИ Я ОНЛАЙН).Вам стоит только оплатить заказ, и вы сразу получите товар)',
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
