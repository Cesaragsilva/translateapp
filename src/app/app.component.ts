import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translateapp';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'pt-br']); //isso aqui pode vir de um arquivo de environments
    translate.setDefaultLang('en'); //aqui você define qual a linguagem padrão do site.

    const browserLang = 'pt-br'; //aqui estou pegando o idioma configurado no navegador do usuario.
    translate.use(browserLang?.match(/en|pt-br/) ? browserLang : 'en'); //aqui estou validando se ja existe a traducao no nosso sistema para o idioma do usuario, se não existir, eu uso o EN.
  }
} 
