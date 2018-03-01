
import { Component, OnInit } from '@angular/core';
import * as Tesseract from 'tesseract.js'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  tesseractProgressName = '...';
  tesseractProgress = 'Upload an Image';

  constructor() { }

  ngOnInit() {
  }

  getPhoto() {
    document.getElementById('my_file').click();
  }

  getPath(event) {
    Tesseract.recognize(event.target.files[0])
      .progress(function (p) {
        if (p.progress == null) {
          // continue
        } else {
          this.tesseractProgressName = p.status;
          this.tesseractProgress = p.progress.toString();
        }
      }.bind(this))
      .then(function(result) {
        console.log(result.text)
      })
      .catch(err => {
        console.log('Something went wrong recognizing the text');
      })
  }

}
