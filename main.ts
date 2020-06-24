controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.createProjectileFromSprite(img`
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
        . . 5 5 5 4 4 2 2 4 4 5 5 5 . .
    `, ship, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (projectile, enemy) {
    // 1) Destroy the enemy and set on fire
    enemy.destroy(effects.fire, 200)
    // 2) Score + 1
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, ship, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player, enemy) {
    enemy.destroy(effects.fire, 200)
    info.changeLifeBy(-1)
})
let enemy: Sprite = null
let ship = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . 2 2 . . . . . . . . . . .
    . . . 2 2 2 2 . . . . . . . . .
    . . 2 2 2 2 2 2 2 . . . . . . .
    . . 2 2 1 1 1 1 2 2 2 2 . . . .
    . 2 2 2 1 1 1 1 8 8 8 2 2 2 . .
    2 2 f f f f f f f f f f f f 2 2
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
ship.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(ship, 200, 200)
// Generate enemy every 0.5 sec
game.onUpdateInterval(500, function () {
    enemy = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . 2 2 . .
        . . . . . . . . . . 2 8 8 8 . .
        . . . . . . . . 2 2 8 8 8 8 . .
        . . . . . . . 2 8 8 8 8 8 8 . .
        . . . . . 2 2 1 1 1 1 1 1 8 . .
        . . . 2 2 8 8 1 1 1 1 1 1 8 . .
        . . 2 8 f f f f f f f f f f . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    // Randomly show up on right side of screen and moving
    // to the left
    enemy.setPosition(160, Math.randomRange(0, 120))
    enemy.setVelocity(-20, 0)
})
