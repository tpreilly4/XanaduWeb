
import { Component, OnInit } from '@angular/core';
import * as Tesseract from 'tesseract.js'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  fileNameOutput = '';

  constructor() { }

  ngOnInit() {
  }

  getPhoto() {
    document.getElementById('my_file').click();
  }

  getText(inputImage: string) {
    Tesseract.recognize(inputImage)
      .then(function(result){
        console.log(result)
      })
  }

  fileEvent(fileInput: Event) {
    const file = (<HTMLInputElement>fileInput.target).files[0];
    const fileName = file.name;
    this.fileNameOutput = fileName;
    this.getText(fileName);
  }

  // getImage(): string {
  //   return url(this.fileNameOutput);
  // }

}
