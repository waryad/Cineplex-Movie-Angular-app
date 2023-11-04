import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './myModules/header/header.component';
import { FooterComponent } from './myModules/footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HeaderFooterModuleModule } from './myModules/header-footer-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialModule } from './myModules/materialUI/material-ui.module';
import { MaterialUIContentComponent } from './material-uicontent/material-uicontent.component';
import { ExternalJsonListComponent } from './external-json-list/external-json-list.component';
import { ExternalButtonListComponent } from './external-button-list/external-button-list.component';
import { ExternalCsvFileComponent } from './external-csv-file/external-csv-file.component';
import { AllExternalFilesComponent } from './all-external-files/all-external-files.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MaterialUIContentComponent,
    ExternalJsonListComponent,
    ExternalButtonListComponent,
    ExternalCsvFileComponent,
    AllExternalFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderFooterModuleModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [MatSlideToggleModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
