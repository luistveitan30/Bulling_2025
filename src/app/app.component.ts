import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Part1Component } from "./components/part1/part1.component";
import { Part2Component } from "./components/part2/part2.component";
import { Part3Component } from "./components/part3/part3.component";
import { HeaderComponent } from "./components/header/header.component";
import { ToolsComponent } from "./components/tools/tools.component";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Part1Component, Part2Component, Part3Component, HeaderComponent, ToolsComponent, FontAwesomeModule,],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = FontAwesomeModule;


}
