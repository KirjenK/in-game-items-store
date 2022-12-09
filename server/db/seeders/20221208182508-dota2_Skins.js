/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Меч-пушка',
          price: 36,
          GameId: 3,
          CategoryId: 2,
          image: 'public/images/sword.png',
          description: 'Раритетный меч в стиле Иммортал',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Сердце Аида',
          price: 54,
          GameId: 3,
          CategoryId: 2,
          image: 'public/images/wings_100.png',
          description: 'Крылья ада',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Сияющий клинок Алладина',
          price: 200,
          GameId: 3,
          CategoryId: 2,
          image: 'public/images/sword_1.png',
          description: 'Самое острое лезвие во Вселенной',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шкура барона',
          price: 112,
          GameId: 3,
          CategoryId: 2,
          image: 'public/images/immo_1.png',
          description: 'Будь как железный человек',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Пушка Ардалана',
          price: 5212,
          GameId: 3,
          CategoryId: 2,
          image: 'public/images/sniper_e.png',
          description: 'Эксклюзив, только с завода',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Магическая палочка Волан-де-Морта',
          price: 19576,
          GameId: 3,
          CategoryId: 2,
          image: 'public/images/boom_763.png',
          description: 'Сразит любого Гарри-Поттера',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Клинок Арагорна',
          price: 231,
          GameId: 3,
          CategoryId: 2,
          image: 'public/images/sword_1232.png',
          description: 'Среди обломков затонувшей галеры, некогда бороздившей моря под знаменем Вигила, мятежный рыцарь заполучил ценную реликвию, перед которой меркнет даже Клинок изгоя.',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Плащ унылого монаха',
          price: 411,
          GameId: 3,
          CategoryId: 2,
          image: 'public/images/helm_888.png',
          description: 'Плащ церемониального боевого наряда канувшей в небытие академии тайных искусств. Один из ее лучших учеников взял этот наряд в качестве священного дара, покидая опостылевшие ему стены',
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