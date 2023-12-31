// *ПРАВИЛА:*
// 1. Массив лабиринта всегда будет квадратным, т.е. N x N, но его размер и содержание будут меняться от теста к тесту.
// 2. Стартовая и финишная позиции будут меняться для финальных тестов.
// 3. Массив направлений всегда будет в верхнем регистре и будет иметь следующий формат: N = Север, E = Восток, W = Запад, S = Юг.
// 4. Если вы достигли конечной точки раньше, чем прошли все ходы, то следует вернуть "Финиш".
// 5. Если вы ударяетесь о стены или выходите за границы лабиринта, то вы должны вернуть значение Dead.
// 6. Если после использования всех ходов вы все еще находитесь в лабиринте, следует вернуть Lost.

const mazeRunner = (maze, moves) => {
   let heightI = 0
   let wightI = 0
   let heightF = 0
   let wightF = 0
   let length = maze.length - 1

   maze.forEach((el, i) => {
      if ((el.length - 1) != length) return 'ваш лабиринт не квадратный'
      if (el.indexOf(2) != -1) {
         heightI = i
         wightI = el.indexOf(2)
      }
      if (el.indexOf(3) != -1) {
         heightF = i
         wightF = el.indexOf(3)
      }
   })
   moves.forEach((el, i) => {
      if (el == 'N') {
         heightI++
      }
      else if (el == 'S') {
         heightI--
      }
      else if (el == 'E') {
         wightI++
      }
      else if (el == 'W') {
         wightI--
      }
      else return 'ваш путь имеет что-то кроме направлений. перепроверьте его и попробуйте снова'
      if (maze[heightI][wightI] == '1' || heightI < 0 || heightI > maze.length || wightI < 0 || wightI > length) { return 'Dead' }
      if (maze[heightI][wightI] == '3') { return 'Finish' }
   })
   return 'Lost'
}

console.log(mazeRunner(
   [[1, 1, 1, 1, 1, 1, 1],
   [1, 0, 0, 0, 0, 0, 3],
   [1, 0, 1, 0, 1, 0, 1],
   [0, 0, 1, 0, 0, 0, 1],
   [1, 0, 1, 0, 1, 0, 1],
   [1, 0, 0, 0, 0, 0, 1],
   [1, 2, 1, 0, 1, 0, 1]],
   ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"])) //=> 'Finish'
console.log(mazeRunner(
   [[1, 1, 1, 1, 1, 1, 1],
   [1, 0, 0, 0, 0, 0, 3],
   [1, 0, 1, 0, 1, 0, 1],
   [0, 0, 1, 0, 0, 0, 1],
   [1, 0, 1, 0, 1, 0, 1],
   [1, 0, 0, 0, 0, 0, 1],
   [1, 2, 1, 0, 1, 0, 1]],
   ["N", "N", "N", "N", "N", "E", "E", "S", "S", "E", "E", "N", "N", "E"])) //=> 'Finish'
console.log(mazeRunner(
   [[1, 1, 1, 1, 1, 1, 1],
   [1, 0, 0, 0, 0, 0, 3],
   [1, 0, 1, 0, 1, 0, 1],
   [0, 0, 1, 0, 0, 0, 1],
   [1, 0, 1, 0, 1, 0, 1],
   [1, 0, 0, 0, 0, 0, 1],
   [1, 2, 1, 0, 1, 0, 1]],
   ["N", "N", "N", "W", "W"])) //=> 'Dead'
console.log(mazeRunner(
   [[1, 1, 1, 1, 1, 1, 1],
   [1, 0, 0, 0, 0, 0, 3],
   [1, 0, 1, 0, 1, 0, 1],
   [0, 0, 1, 0, 0, 0, 1],
   [1, 0, 1, 0, 1, 0, 1],
   [1, 0, 0, 0, 0, 0, 1],
   [1, 2, 1, 0, 1, 0, 1]],
   ["N", "E", "E", "E", "E"])) //=> 'Lost'
console.log(mazeRunner(
   [[1, 1, 1, 1, 1, 1, 1],
   [1, 0, 0, 0, 0, 0, 3],
   [1, 0, 1, 0, 1, 0, 1],
   [0, 0, 1, 0, 0, 0, 1],
   [1, 0, 1, 0, 1, 0, 1],
   [1, 0, 0, 0, 0, 0, 1, 0],
   [1, 2, 1, 0, 1, 0]],
   ["N", "N", "W", "E"])) //=> 'ваш лабиринт не квадратный'
console.log(mazeRunner(
   [[1, 0, 0, 0, 0, 0, 3],
   [1, 0, 1, 0, 1, 0, 1],
   [0, 0, 1, 0, 0, 0, 1],
   [1, 0, 1, 1, 1, 0, 1],
   [1, 0, 0, 0, 0, 0, 1],
   [1, 2, 1, 0, 1, 0, 1]],
   ["W", "S", "E", "E", "N"])) //=> 'ваш лабиринт не квадратный'