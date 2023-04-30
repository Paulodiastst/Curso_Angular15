import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {createIndexSignature} from "@angular/compiler-cli/src/ngtsc/ts_compatibility";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
  title = 'projeto1';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Component OnChanges');
  }

  ngOnInit(): void {
    console.log('Component OnInit');
  }

  ngDoCheck(): void {
    console.log('Component DoCheck')
  }

  mudarTexto() {
    this.title += 'a';
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterContentInit(): void {
    console.log('Component Content Init')
  }

  ngAfterViewInit(): void {
    console.log('Component AfterViewInit')
  }

  ngAfterContentChecked(): void {
    console.log('Component Content Checked')
  }

  ngAfterViewChecked(): void {
    console.log('View Checked');
  }
}
