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

  cards1 = [
    {
      number: '01',
      Title: 'Cost-effectiveness',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis laboriosam odio magnam, recusandae nisi atque modi deserunt quas doloremque, eos animi debitisin rem eum, rerum eveniet officia soluta.'
    },
    {
      number: '02',
      Title: 'Team of Experts',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis laboriosam odio magnam, recusandae nisi atque modi deserunt quas doloremque, eos animi debitisin rem eum, rerum eveniet officia soluta.'
    },
    {
      number: '03',
      Title: 'We are available 24x7',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis laboriosam odio magnam, recusandae nisi atque modi deserunt quas doloremque, eos animi debitisin rem eum, rerum eveniet officia soluta.'
    },
    {
      number: '04',
      Title: 'Timely delivery',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis laboriosam odio magnam, recusandae nisi atque modi deserunt quas doloremque, eos animi debitisin rem eum, rerum eveniet officia soluta.'
    }
  ]

  cards2 = [
    {
      icon: 'bi bi-lightbulb',
      Title: 'Our Vision',
    },
    {
      icon: 'bi bi-lightbulb',
      Title: 'Our Mission',
    },
  ]

  cards3 = [
    {
      icon: 'bi bi-lightbulb',
      Title: 'Our Vision',
    },
    {
      icon: 'bi bi-lightbulb',
      Title: 'Our Mission',
    },
  ]

  cards4 = [
    {
      Title: 'Cricket Live Line App & Web Development',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit a nesciunt assumenda dolorum qui quae maiores rerum neque accusantium sapiente laudantium, eos vel repudiandae nam eius itaque illum doloremque?',

      but: 'View Cricket Demo',
    },
    {
      Title: 'News App and Web platform Development Company',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit a nesciunt assumenda dolorum qui quae maiores rerum neque accusantium sapiente laudantium, eos vel repudiandae nam eius itaque illum doloremque?',

      but: 'View News App',
    },
    {
      Title: 'E-Commerce App And Web Development Company',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit a nesciunt assumenda dolorum qui quae maiores rerum neque accusantium sapiente laudantium, eos vel repudiandae nam eius itaque illum doloremque?',

      but: 'View Comfygens ',
    },
  ]



  cards5 = [
    {
      n: '01',
      Title: 'Requirement Gathering',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit a nesciunt assumenda dolorum qui quae maiores rerum neque accusantium sapiente laudantium, eos vel repudiandae nam eius itaque illum doloremque?',
    },
    {
      n: '02',
      Title: 'Strategy and Execution',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit a nesciunt assumenda dolorum qui quae maiores rerum neque accusantium sapiente laudantium, eos vel repudiandae nam eius itaque illum doloremque?',
    },
    {
      n: '03',
      Title: 'Prototyping Phase UI/UX',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit a nesciunt assumenda dolorum qui quae maiores rerum neque accusantium sapiente laudantium, eos vel repudiandae nam eius itaque illum doloremque?',
    },
    {
      n: '04',
      Title: 'Development Phase',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit a nesciunt assumenda dolorum qui quae maiores rerum neque accusantium sapiente laudantium, eos vel repudiandae nam eius itaque illum doloremque?',
    },
    {
      n: '05',
      Title: 'Testing and Deployment',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit a nesciunt assumenda dolorum qui quae maiores rerum neque accusantium sapiente laudantium, eos vel repudiandae nam eius itaque illum doloremque?',
    },
    {
      n: '06',
      Title: 'Swift Launch',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit a nesciunt assumenda dolorum qui quae maiores rerum neque accusantium sapiente laudantium, eos vel repudiandae nam eius itaque illum doloremque?',
    },
    {
      n: '07',
      Title: 'Maintenance & further Growth Support',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit a nesciunt assumenda dolorum qui quae maiores rerum neque accusantium sapiente laudantium, eos vel repudiandae nam eius itaque illum doloremque?',
    },
  ]

  cards6 = [
    {
      icon: '01',
      Title: 'Mongodb',
    },
    {
      icon: '01',
      Title: 'Google Cloud',
    },
    {
      icon: '01',
      Title: 'Azure',
    },
    {
      icon: '01',
      Title: 'Nginx',
    },
    {
      icon: '01',
      Title: 'Digital Ocean',
    },
    {
      icon: '01',
      Title: 'Mysql',
    },
    {
      icon: '01',
      Title: 'Amazon Webservices',
    },
    {
      icon: '01',
      Title: 'Amazon',
    },
  ]

  cards7 = [
    {
      Image:'',
      Name:'Vikas Sahu',
      Profile:'Angular Developer',
      About:'',
      facebook:'',
      linkdin:'',
      Instagram:'',
    },
    {
      Image:'',
      Name:'Susheel Gupta',
      Profile:'Angular Developer',
      About:'',
      facebook:'',
      linkdin:'',
      Instagram:'',
    },
    {
      Image:'',
      Name:'Ritika Masalia',
      Profile:'Angular Developer',
      About:'',
      facebook:'',
      linkdin:'',
      Instagram:'',
    },
    {
      Image:'',
      Name:'Hephzi Raj',
      Profile:'Angular Developer',
      About:'',
      facebook:'',
      linkdin:'',
      Instagram:'',
    },
  ]

}
