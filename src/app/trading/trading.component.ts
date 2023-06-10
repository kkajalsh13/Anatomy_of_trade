import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.css']
})
export class TradingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id = -1
  score = 0
  answer:any = []
  correct_answer:any = ["Swift Message","Settlement","Clearing","Trade Capture","Trade Enrichment","Confirmation","Order","Reporting"]
  Terms:any = ["Order","Trade Enrichment","Swift Message","Reporting","Confirmation","Settlement","Clearing","Trade Capture"]
  Definition:any = [
    "The process of getting ready for settlement. It has two keys components: 1. Checking the details of the trade submitted from both sides of the trade agree. 2. Checking that the buyer has sufficient funds available and that the seller has sufficient securities.",
    "Standard settlement instructions (SSIs) added to transactions.",
    "Transaction details flow into middle and back office systems.",
    "Execution is handled by the front office system. Customer uses electronic platform to enter details of the order and front office is informed of the filled transaction via the system.",
    "Construct and send electronic instruction to the custodian.",
    "Counterparties agree the detail of the transaction including: (1) Price, (2) volume, (3) settlement date, and (4) trade date.",
    "Custodian reports balances held in security and cash accounts which is reconciled versus bank records.",
    "Cash exchanged for assets."
  ]
  reset(){
    window.location.reload()
  }
  select1(event:any){
    this.id = event.target.id
    let k = Number(this.id)
  }

  select2(event:any){
    let w = event.target.id
    this.answer[Number(this.id)] = w
    this.id = -1
  }

  submit(){
    for(let i =0; i< this.correct_answer.length;i++){
      if(this.answer[i]==this.correct_answer[i]){
        this.score+=1
      }
    }
  }
}
