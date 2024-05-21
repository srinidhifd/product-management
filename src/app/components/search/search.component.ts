import { Component, EventEmitter, Output, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule,MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  onSearch(){
console.log("search");
this.search.emit(this.text);
  }
text=""
  inputChange(event: any){
    console.log("input change", event);

    this.text = event.target.value
  }

  Typing(event: any){
    console.log("typing", event);
  }
}
