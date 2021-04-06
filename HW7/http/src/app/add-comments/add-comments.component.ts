import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {DataCommentsService} from '../services/data-comments.service'

interface IComments {
  userName: string,
  commentText: string,
  data: number
}

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.sass']
})

export class AddCommentsComponent implements OnInit {

  form: FormGroup;
  comments: IComments[];

  constructor(private data: DataCommentsService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'commentText': new FormControl('', Validators.required)
    });

    this.data.getComments()
      .subscribe(value => {
        this.comments = value;
        this.sortComments();
      });

  }

  sortComments() {
    this.comments.sort((prev, next) => next.data - prev.data);
  }

  addComment(myForm: any) {
    const newComment: IComments = {...myForm.value, data: Date.now()};
    this.data.addComment(newComment)
      .subscribe(value => {
        this.comments.push(newComment);
        this.sortComments();
        myForm.reset();
      });

  }
}
