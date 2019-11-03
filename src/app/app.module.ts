import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DygenericService } from './service/dygeneric.service';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DycomponentComponent } from './component/dycomponent/dycomponent.component';
import { LoadTemplate } from './directives/load-template';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from 'apollo-cache-inmemory';



//import { ApolloModule, Apollo } from 'apollo-angular';
//import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';

// import { GraphQLModule } from './graphql.module';


@NgModule({
  declarations: [
    AppComponent,
   // DycomponentComponent,
    LoadTemplate
   // ApolloModule,
   // HttpLinkModule
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    HttpModule
    // GraphQLModule
  ],
  providers: [DygenericService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { 
  /*constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) { 
    apollo.create({
      link: httpLink.create({uri: 'http://localhost:4000/graphql'}),
      cache: new InMemoryCache()
    });
  }*/
}
