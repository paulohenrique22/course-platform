import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';


interface ICourse {
  title: string
  description: string
  imageUrl: string,
  raiting: number,
  modules: number,
  progress: number
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses: ICourse[] = [
    {
      title: "Desenvolvimento Pessoal",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam",
      imageUrl: "https://ampliar.org.br/wp-content/uploads/2021/11/vale-a-pena-fazer-um-curso-tecnico.jpg",
      modules: 10,
      raiting: 5,
      progress: 45
    },
    {
      title: "HTML CSS e Javascript",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam",
      imageUrl: "https://uva.br/conteudo/2022/07/AnyConv.com__shutterstock_1207740871-1-1.webp",
      modules: 6,
      raiting: 3,
      progress: 4
    },
    {
      title: "Excel Avançado III ",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam",
      imageUrl: "https://ampliar.org.br/wp-content/uploads/2021/11/vale-a-pena-fazer-um-curso-tecnico.jpg",
      modules: 10,
      raiting: 5,
      progress: 45
    },
    {
      title: "Excel Básico",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam",
      imageUrl: "https://uva.br/conteudo/2022/07/AnyConv.com__shutterstock_1207740871-1-1.webp",
      modules: 6,
      raiting: 2,
      progress: 100
    },
    {
      title: "Course 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam",
      imageUrl: "https://uva.br/conteudo/2022/07/AnyConv.com__shutterstock_1207740871-1-1.webp",
      modules: 6,
      raiting: 3,
      progress: 4
    },
    {
      title: "Course 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam",
      imageUrl: "https://uva.br/conteudo/2022/07/AnyConv.com__shutterstock_1207740871-1-1.webp",
      modules: 6,
      raiting: 3,
      progress: 4
    },
    {
      title: "Course 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam",
      imageUrl: "https://uva.br/conteudo/2022/07/AnyConv.com__shutterstock_1207740871-1-1.webp",
      modules: 6,
      raiting: 3,
      progress: 4
    },
  ];

  raiting: number = 3



  setValue(event: any) {
    console.log(event)
    this.raiting = event.value
  }
}
