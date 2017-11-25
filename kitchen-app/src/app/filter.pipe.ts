import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(foodList: any, searchText: any): any {
    if(searchText === undefined) return foodList;
    return foodList.filter(function(food){
      return food.recipeName.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
