var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

function preload() {
  game.load.image('background', 'src/images/background.jpg')
}

function create() {
  // Create background image sprite
  var background = game.add.sprite(game.world.top, game.world.left, 'background');
  // Scale background to fit the game
  background.width = 800;
  background.height = 600;
}
