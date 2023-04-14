import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cards = [
    {
      Title: 'Web Design / Development',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiislaboriosam odio magnam, recusandae nisi atque modi deserunt quas doloremque, eos animi debitisin rem eum, rerum eveniet officia soluta.',
    },
    {
      Title: 'UI/UX Design & Development',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis laboriosam odio magnam, recusandae nisi atque modi deserunt quas doloremque, eos animi debitisin rem eum, rerum eveniet officia soluta.',
    },
    {
      Title: 'Mobile App Development',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis laboriosam odio magnam, recusandae nisi atque modi deserunt quas doloremque, eos animi debitisin rem eum, rerum eveniet officia soluta.',
    },
    {
      Title: 'MEAN Stack Development',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis laboriosam odio magnam, recusandae nisi atque modi deserunt quas doloremque, eos animi debitisin rem eum, rerum eveniet officia soluta.',
    },
    {
      Title: 'SEO',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis laboriosam odio magnam, recusandae nisi atque modi deserunt quas doloremque, eos animi debitisin rem eum, rerum eveniet officia soluta.',
    },
    {
      Title: 'Ecommerce Development',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis laboriosam odio magnam, recusandae nisi atque modi deserunt quas doloremque, eos animi debitisin rem eum, rerum eveniet officia soluta.',
    }
  ]
}
