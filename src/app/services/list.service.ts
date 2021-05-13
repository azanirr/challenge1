import { Injectable } from '@angular/core';
import { title, list_certifier } from '../component/list/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  getTitle() {
    return title;
  }
  getButtonCertifier() {
    list_certifier.unshift('All')
    return list_certifier;
  }
  onFilter(list, text) {
    let filtered = title;
    console.log(filtered)
    if ( list == "All") {
      filtered = title;
      console.log(filtered)
    } else {
      filtered = filtered.filter(el => el?.certifier?.short_name == list || el?.short_name == list);
      console.log(filtered)
    }
    if (text != "") {
      filtered = filtered.filter(el => el?.short_name.includes(text.toUpperCase()) || el?.short_name.includes(text.toLowerCase()))
      console.log(filtered)
    }
    console.log(filtered)
    return filtered
    
  }
}
