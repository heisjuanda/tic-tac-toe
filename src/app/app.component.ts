import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  player: boolean = true;
  matrix: number[][] =
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
  winner: boolean = false;
  ganador: string = "";
  score1: number = 0;
  score2: number = 0;
  score3: number = 0;
  ntries:number =0;
  reset() {
    this.player = true;
    this.winner = false;
    this.ganador = "";
    this.ntries = 0;
    let lbids: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let lpids: string[] = ['res1', 'res2', 'res3', 'res4', 'res5', 'res6', 'res7', 'res8', 'res9'];
    lbids.map(function (x) {
      let boton = document.getElementById(x) as HTMLElement | null;
      boton?.removeAttribute("disabled");
    });
    lpids.map(function (x) {
      let p: any = document.getElementById(x) as HTMLElement | null;
      p.innerHTML = "";
    });

    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }
  ganar = () => {
    let pyer1: any = document.getElementById("scp1") as HTMLElement | null;
    let pyer2: any = document.getElementById("scp2") as HTMLElement | null;
    let pyer0: any = document.getElementById("scp0") as HTMLElement | null;

    if (this.winner && this.ganador == "Player 1") {
      this.score1 += 1;
      pyer1.innerHTML = this.score1.toString();
    } else if (this.winner && this.ganador == "Player 2") {
      this.score2 += 1;
      pyer2.innerHTML = this.score2;
    } else if (this.winner && this.ganador == "Player 3") {
      this.score3 += 1;
      pyer0.innerHTML = this.score3.toString();
    }
  }
  setSymbol(id1: string, id2: string) {
    this.ntries +=1;
    let boton = document.getElementById(id1) as HTMLElement | null;
    let p: any = document.getElementById(id2) as HTMLElement | null;
    if (this.player) {
      p.innerHTML = "X";
      if (id1 == '1') {
        this.matrix[0][0] = 1;
      } else
        if (id1 == '2') {
          this.matrix[0][1] = 1;
        } else
          if (id1 == '3') {
            this.matrix[0][2] = 1;
          } else
            if (id1 == '4') {
              this.matrix[1][0] = 1;
            } else
              if (id1 == '5') {
                this.matrix[1][1] = 1;
              } else
                if (id1 == '6') {
                  this.matrix[1][2] = 1;
                } else
                  if (id1 == '7') {
                    this.matrix[2][0] = 1;
                  } else
                    if (id1 == '8') {
                      this.matrix[2][1] = 1;
                    } else
                      if (id1 == '9') {
                        this.matrix[2][2] = 1;
                      }
    } else {
      p.innerHTML = "O";
      if (id1 == '1') {
        this.matrix[0][0] = 2;
      } else
        if (id1 == '2') {
          this.matrix[0][1] = 2;
        } else
          if (id1 == '3') {
            this.matrix[0][2] = 2;
          } else
            if (id1 == '4') {
              this.matrix[1][0] = 2;
            } else
              if (id1 == '5') {
                this.matrix[1][1] = 2;
              } else
                if (id1 == '6') {
                  this.matrix[1][2] = 2;
                } else
                  if (id1 == '7') {
                    this.matrix[2][0] = 2;
                  } else
                    if (id1 == '8') {
                      this.matrix[2][1] = 2;
                    } else
                      if (id1 == '9') {
                        this.matrix[2][2] = 2;
                      }
    }

    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {

        if ((i == 0 || i == 1 || i == 2) && ((this.matrix[i][0] == 1) && (this.matrix[i][1] == 1) && (this.matrix[i][2] == 1))) {
          this.ganador = "Player 1";
          this.winner = true;
          break;
        } else
          if ((i == 0 || i == 1 || i == 2) && ((this.matrix[i][0] == 2) && (this.matrix[i][1] == 2) && (this.matrix[i][2] == 2))) {
            this.ganador = "Player 2";
            this.winner = true;
            break;
          } else
            if (i == j && ((this.matrix[0][0] == 1) && (this.matrix[1][1] == 1) && (this.matrix[2][2] == 1))) {
              this.ganador = "Player 1";
              this.winner = true;
              break;
            } else
              if (i == j && ((this.matrix[0][0] == 2) && (this.matrix[1][1] == 2) && (this.matrix[2][2] == 2))) {
                this.ganador = "Player 2";
                this.winner = true;
                break;
              } else
                if (i + j == 2 && ((this.matrix[0][2] == 1) && (this.matrix[1][1] == 1) && (this.matrix[2][0] == 1))) {
                  this.ganador = "Player 1";
                  this.winner = true;
                  break;
                }
                else
                  if (i + j == 2 && ((this.matrix[0][2] == 2) && (this.matrix[1][1] == 2) && (this.matrix[2][0] == 2))) {
                    this.ganador = "Player 2";
                    this.winner = true;
                    break;
                  } else
                    if ((j == 0 || j == 1 || j == 2) && ((this.matrix[0][j] == 1) && (this.matrix[1][j] == 1) && (this.matrix[2][j] == 1))) {
                      this.ganador = "Player 1";
                      this.winner = true;
                      break;
                    }
                    else
                      if ((j == 0 || j == 1 || j == 2) && ((this.matrix[0][j] == 2) && (this.matrix[1][j] == 2) && (this.matrix[2][j] == 2))) {
                        this.ganador = "Player 2";
                        this.winner = true;
                        break;
                      }else
                      if(this.ntries==9){
                        this.ganador = "Player 3";
                        this.winner = true;
                        break;
                      }
      }
    }
    if (this.winner) {
      this.ganar();
      let lbids: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
      lbids.map(function (x) {
        let boton = document.getElementById(x) as HTMLElement | null;
        boton?.setAttribute("disabled", "");
      });
      if(this.ganador=="Player 1" || this.ganador=="Player 2"){
        alert("Congratulations!! " + this.ganador + " is the Winner of the game!");
      }else
      if(this.ganador=="Player 3"){
        alert("Draw! XD");
      }
    }
    boton?.setAttribute('disabled', '');
    this.player = !this.player;
  }

}
