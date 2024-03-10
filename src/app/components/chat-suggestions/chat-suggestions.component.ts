import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { QuestionComponent } from '../../icons/question/question.component';
import { CuriosityComponent } from '../../icons/curiosity/curiosity.component';
import { HistoryComponent } from '../../icons/history/history.component';
import { ChatDialogComponent } from '../chat-dialog/chat-dialog.component';

@Component({
  selector: 'chat-suggestions',
  standalone: true,
  imports: [
    CommonModule,
    QuestionComponent,
    CuriosityComponent,
    HistoryComponent,
  ],
  templateUrl: './chat-suggestions.component.html',
  styleUrl: './chat-suggestions.component.scss'
})
export class ChatSuggestionsComponent {
  @Output() questionSelected = new EventEmitter<string>();
  suggestionTopics = [
    {
      title: 'Dúvidas',
      icon: 'doubt',
      questions: [
        'Quando o museu está aberto?', 
        'Qual o valor para entrar no museu?'
      ]
    },
    {
      title: 'Curiosidades',
      icon: 'curiosity',
      questions: [
        'Quem era o prefeito na época da criação?',
        'Quantos cômodos existem no museu??',
        'Quantas peças estão exibidas no museu?'
      ]
    },
    {
      title: 'História',
      icon: 'history',
      questions: [
        'Quando o museu foi criado?',
        'Qual o estilo arquitetônico do prédio?',
        'Quem foi o arquiteto do prédio?'
      ]
    }
  ]

  selectQuestion(value: string) {
    this.questionSelected.emit(value);
  }


}
