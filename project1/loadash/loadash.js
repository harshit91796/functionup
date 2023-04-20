import _ from 'lodash';

export function cool(){
  
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    
    let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

    let arr1 = [1, 2, 3, 4, 5, 1];
    let arr2 = [4, 5, 6, 7, 8, 6];
    let arr3 = [7, 8, 9, 10, 11, 10];
    let arr4 = [10, 11, 12, 13, 14, 12];
    let arr5 = [13, 14, 15, 16, 17, 15];
  

    const moviesObj  = [
        ['horror', 'The Shining'],
        ['drama', 'Titanic'],
        ['thriller', 'Shutter Island'],
        ['fantasy', 'Pans Labyrinth']
      ];


      const month1 = _.chunk(months,3);
      const oddNumbers1 = _.tail(oddNumbers);
      const dublicate = _.union(arr1,arr2,arr3,arr4,arr5);
      const movie = _.fromPairs(moviesObj);

      return {
        month1,
        oddNumbers1,
        dublicate,
        movie
    }
}