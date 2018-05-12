 new Vue({  
   el: '#app',
   data: {
     playerHealth: 100,
     monsterHealth: 100,
     gameIsRunning: false,
     turns: []
   }, 
   methods: {
     startGame: function() {
       this.gameIsRunning = true;
       this.playerHealth = 100,
       this.monsterHealth = 100
     },
     attack: function() {
      const damageByHuman = this.calculateDamage(3, 10)
      this.monsterHealth -= damageByHuman
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits Monster for ${damageByHuman}`
      })
      if (this.checkWin()) {
        return
      }
      this.monsterAttacks()
     },
     specialAttack: function() {
      const bigDamage = this.calculateDamage(10, 25)
      this.monsterHealth -= bigDamage
        if (this.checkWin()){
          return
        }
        this.turns.unshift({
          isPlayer: true,
          text: `Ouch! Player severely hits Monster for ${bigDamage}`
        })
      this.monsterAttacks()
     },
     heal: function(){
       if(this.playerHealth <= 90) {
        this.playerHealth += 10
        this.turns.unshift({
          isPlayer: true,
          text: `Player takes some time to heal her wounds.`
        })
        this.monsterAttacks()
       } 
     },
     giveUp: function(){
      this.gameIsRunning = false
     },
     monsterAttacks: function() {
      const damageByMonster = this.calculateDamage(5, 12)
      this.playerHealth -= damageByMonster
      this.turns.unshift({
        isPlayer: false,
        text: `Monster hits Player for ${damageByMonster}`
      })
      this.checkWin()
     },
     calculateDamage: function(min, max){
       return Math.max(Math.floor(Math.random() * max) + 1, min)

     },
     checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New game?')) {
          this.startGame()
        }else {
          this.gameIsRunning = false
        }
        return true
      }else if (this.playerHealth <= 0) {
        if (confirm('You lost! New game?')) {
          this.startGame()
        }else {
          this.gameIsRunning = false
        }
        return true
      }
      return false
     }
   }
 })