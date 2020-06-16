import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logica = new FormGroup({
    p: new FormControl(false, Validators.required),
    q: new FormControl(false)
  })
  combinacao = new FormGroup({
    n: new FormControl('', Validators.required),
    k: new FormControl('')
  });
  somatorio =  new FormGroup({
    m: new FormControl('', Validators.required),
    n: new FormControl('', Validators.required)
  })
  array1 = new FormGroup({
    a11: new FormControl('',Validators.required),
    a12: new FormControl('', Validators.required),
    a21: new FormControl('', Validators.required),
    a22: new FormControl('', Validators.required)
  });
  array2 = new FormGroup({
    a11: new FormControl('',Validators.required),
    a12: new FormControl('', Validators.required),
    a21: new FormControl('', Validators.required),
    a22: new FormControl('', Validators.required),
    a11_2: new FormControl('',Validators.required),
    a12_2: new FormControl('', Validators.required),
    a21_2: new FormControl('', Validators.required),
    a22_2: new FormControl('', Validators.required)
  })
  title = 'CalculadoraAngular';
  public screenType: String;
  public result: any;
  public resultArray11: Number;
  public resultArray12: Number;
  public resultArray21: Number;
  public resultArray22: Number;
  public buttonScreenType: String = 'initial';
  public screenTypeBody: String;
  public changeScreen(screenType) {
    this.screenType = screenType;
    this.buttonScreenType = 'secondOptions';
    this.reset();
  }
  public reset() {
    this.array1.reset();
    this.array2.reset();
    this.somatorio.reset();
    this.combinacao.reset();
    this.logica.reset();
    this.result = null;
    this.resultArray11 = null;
    this.resultArray12 = null;
    this.resultArray21 = null;
    this.resultArray22 = null;
  }
  public changeScreenTypeBody(screenTypeBody) {
    this.reset();
    if(screenTypeBody == 'initial') {
      this.buttonScreenType = 'initial';
      this.screenType = null;
      this.screenTypeBody = null;
    }
    else {
      this.screenTypeBody = screenTypeBody;
      if(screenTypeBody == 'logica-1' || screenTypeBody == 'logica-2' || screenTypeBody == 'logica-3' || screenTypeBody == 'logica-4' || screenTypeBody == 'logica-5' || screenTypeBody == 'logica-6' || screenTypeBody == 'logica-7') {
        this.logica.get('p').setValue(false);
        this.logica.get('q').setValue(false);
      }
    }
  }
  calcularArray() {
    if(this.screenTypeBody == 'matriz-1') {
      this.result = this.array1.get('a11').value * this.array1.get('a22').value - this.array1.get('a21').value * this.array1.get('a12').value;
    }
    if(this.screenTypeBody == 'matriz-2') {
      this.resultArray11 = this.array2.get('a11').value + this.array2.get('a11_2').value;
      this.resultArray12 = this.array2.get('a12').value + this.array2.get('a12_2').value;
      this.resultArray21 = this.array2.get('a21').value + this.array2.get('a21_2').value;
      this.resultArray22 = this.array2.get('a22').value + this.array2.get('a22_2').value;
    }
    if(this.screenTypeBody == 'matriz-3') {
      this.resultArray11 = this.array2.get('a11').value - this.array2.get('a11_2').value;
      this.resultArray12 = this.array2.get('a12').value - this.array2.get('a12_2').value;
      this.resultArray21 = this.array2.get('a21').value - this.array2.get('a21_2').value;
      this.resultArray22 = this.array2.get('a22').value - this.array2.get('a22_2').value;
    }
    if(this.screenTypeBody == 'matriz-4') {
      this.resultArray11 = this.array2.get('a11').value * this.array2.get('a11_2').value + this.array2.get('a12').value * this.array2.get('a21_2').value;
      this.resultArray12 = this.array2.get('a11').value * this.array2.get('a12_2').value + this.array2.get('a12').value * this.array2.get('a22_2').value;
      this.resultArray21 = this.array2.get('a21').value * this.array2.get('a11_2').value + this.array2.get('a22').value * this.array2.get('a21_2').value;
      this.resultArray22 = this.array2.get('a21').value * this.array2.get('a12_2').value + this.array2.get('a22').value * this.array2.get('a22_2').value;
    }
  }
  calcularSomatorio() {
    let sum = 0;
    if(this.screenTypeBody == 'somatorio-1') {
      for(let number = this.somatorio.get('m').value; number <= this.somatorio.get('n').value; number++) {
        sum += number; 
      }
    }
    if(this.screenTypeBody == 'somatorio-2') {
      for(let number = this.somatorio.get('m').value; number <= this.somatorio.get('n').value; number++) {
        sum += Math.pow(-number,(number+1)); 
      }
    }
    this.result = sum;
  }
  calcularLogica() {
    console.log('calcular');
    let resultBoolean: Boolean;
    if(this.screenTypeBody == 'logica-1') {
      resultBoolean = !this.logica.get("p").value;
    }
    if(this.screenTypeBody == 'logica-2') {
      resultBoolean = !this.logica.get("q").value;
    }
    if(this.screenTypeBody == 'logica-3') {
      resultBoolean = (this.logica.get("p").value) && (this.logica.get("q").value);
    }
    if(this.screenTypeBody == 'logica-4') {
      resultBoolean = (this.logica.get("p").value) || (this.logica.get("q").value);
    }
    if(this.screenTypeBody == 'logica-5') {
      console.log('entrou = 5');
      console.log(this.logica.get('p').value);
      console.log(this.logica.get('q').value);
      if(this.logica.get('p').value == true && this.logica.get('q').value == false || this.logica.get('p').value == false && this.logica.get('q').value == true) {
        resultBoolean = true;
        console.log('entrou true');
      }
      else {
        console.log('entrou false');
        resultBoolean = false;
      }
    }
    if(this.screenTypeBody == 'logica-6') {
      if(this.logica.get('q').value == true || this.logica.get('q').value == false && this.logica.get('p').value == false) {
        resultBoolean = true;
      }
      else {
        resultBoolean = false;
      }
    }
    if(this.screenTypeBody == 'logica-7') {
      if(this.logica.get('q').value == true && this.logica.get('p').value == true  || this.logica.get('q').value == false && this.logica.get('p').value == false) {
        resultBoolean = true;
      }
      else {
        resultBoolean = false;
      }
    }
    if(resultBoolean) {
      this.result = 'Verdadeiro';
    }
    else {
      this.result = 'Falso';
    }
  }
  calcularCombinatorio() {
    console.log('aqui');
    let finalResult;
    if(this.screenTypeBody == 'combinatorio-1') {
      let result = 1;
      for(let index = this.combinacao.get('n').value; index >=1; index --) {
        result *= index;
      }
      finalResult = result;
    }
    if(this.screenTypeBody == 'combinatorio-2') {
      let divisor = 1;
      let dividendo = 1;
      for(let index = this.combinacao.get('n').value; index >=1; index --) {
        divisor *= index;
      }
      for(let index = this.combinacao.get('n').value - this.combinacao.get('k').value; index >= 1; index--) {
        dividendo *= index;
      }
      finalResult = divisor/dividendo;
      console.log('divisor'+divisor);
      console.log('dividendo'+dividendo);
    }
    if(this.screenTypeBody == 'combinatorio-3') {
      let divisor = 1;
      let dividendo = 1;
      let dividendoIndex = 1;
      for(let index = this.combinacao.get('n').value; index >=1; index --) {
        divisor *= index;
      }
      for(let index = this.combinacao.get('n').value - this.combinacao.get('k').value; index >= 1; index--) {
        dividendo *= index;
      }
      for(let index = this.combinacao.get('k').value; index >= 1; index--) {
        dividendoIndex *= index;
      }
      console.log('divisor'+divisor);
      console.log('dividendo'+dividendo);
      console.log('dividendoIndex'+dividendoIndex);
      finalResult = divisor/(dividendo*dividendoIndex);
    }
    this.result = finalResult;
  }
}
