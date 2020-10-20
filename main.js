// Your code here.
const makeBoss = function (boss) {
  const newBoss = {
    name: boss.name,
    attackDamage: boss.attackDamage,
    level: boss.level,
    alive: boss.alive,
    hitPoints: boss.hitPoints,
    boss: true,
  }
  return newBoss
}

const levelUp = function (boss) {
  const bigBoss = {
    name: boss.name,
    attackDamage: boss.attackDamage,
    alive: boss.alive,
    hitPoints: boss.hitPoints,
    boss: boss.boss,
    level: boss.level + 1,
  }
  return bigBoss
}

const buff = function (boss) {
  const mobBoss = {
    name: boss.name,
    alive: boss.alive,
    hitPoints: boss.hitPoints,
    boss: boss.boss,
    level: boss.level,
    attackDamage: boss.attackDamage + 15,
  }
  return mobBoss
}

const makeSuper = function (boss) {
  const strongBoss = {
    alive: boss.alive,
    hitPoints: boss.hitPoints,
    boss: boss.boss,
    level: boss.level,
    attackDamage: boss.attackDamage,
    name: 'Super' + ' ' + boss.name,
  }
  return strongBoss
}

const hitEnemy = function (boss) {
  const weakBoss = {
    name: boss.name,
    alive: boss.alive,
    boss: boss.boss,
    level: boss.level,
    attackDamage: boss.attackDamage,
    hitPoints: boss.hitPoints - 10,
  }
  if (weakBoss.hitPoints <= 0) {
    weakBoss.alive = false;
  }
  return weakBoss
}
// This one through me off.  I was doing the right syntax but 
// not adding weakBoss.hitPoints just saying hitPoints.

const beastMode = function (boss) {
  const monsterBoss = {
    alive: boss.alive,
    hitPoints: boss.hitPoints,
    boss: true,
    name: 'Super ' + boss.name,
    level: boss.level + 1,
    attackDamage: boss.attackDamage + 15,
  }
  return monsterBoss
}







// Our code here. Don't touch!
if (typeof makeBoss === 'undefined') {
  makeBoss = undefined
}

if (typeof levelUp === 'undefined') {
  levelUp = undefined
}

if (typeof buff === 'undefined') {
  buff = undefined
}

if (typeof makeSuper === 'undefined') {
  makeSuper = undefined
}

if (typeof hitEnemy === 'undefined') {
  hitEnemy = undefined
}

if (typeof beastMode === 'undefined') {
  beastMode = undefined
}


module.exports = {
  makeBoss,
  levelUp,
  buff,
  makeSuper,
  hitEnemy,
  beastMode,
}
