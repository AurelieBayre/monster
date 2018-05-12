 new Vue({  
   el: '#app',
   data: {
     playerHealth: 100,
     monsterHealth: 100,
     gameIsRunning: false
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
      if (this.checkWin()) {
        return
      }
     
      const damageByMonster = this.calculateDamage(5, 12)
      this.playerHealth -= damageByMonster
      
      this.checkWin()
     },
     specialAttack: function() {

     },
     heal: function(){

     },
     giveUp: function(){

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