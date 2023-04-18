import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InboxComponent } from './inbox/inbox.component';
import { ReadComponent } from './read/read.component';
import { ComposeComponent } from './compose/compose.component';
import { ChartsComponent } from './charts/charts.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AccordionComponent } from './ui-kits/accordion/accordion.component';
import { AlertsComponent } from './ui-kits/alerts/alerts.component';
import { BadgesComponent } from './ui-kits/badges/badges.component';
import { BreadcrumbsComponent } from './ui-kits/breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './ui-kits/button/button.component';
import { ButtonGroupComponent } from './ui-kits/button-group/button-group.component';
import { CardsComponent } from './ui-kits/cards/cards.component';
import { CarouselComponent } from './ui-kits/carousel/carousel.component';
import { CollapseComponent } from './ui-kits/collapse/collapse.component';
import { DropdownsComponent } from './ui-kits/dropdowns/dropdowns.component';
import { ListGroupComponent } from './ui-kits/list-group/list-group.component';
import { MediaObjectComponent } from './ui-kits/media-object/media-object.component';
import { ModelComponent } from './ui-kits/model/model.component';
import { NavComponent } from './ui-kits/nav/nav.component';
import { NavbarComponent } from './ui-kits/navbar/navbar.component';
import { PaginationComponent } from './ui-kits/pagination/pagination.component';
import { PopoverComponent } from './ui-kits/popover/popover.component';
import { ProgressComponent } from './ui-kits/progress/progress.component';
import { CropperComponent } from './ui-kits/cropper/cropper.component';
import { OwlCarouselComponent } from './advance-ui/owl-carousel/owl-carousel.component';
import { SortableComponent } from './advance-ui/sortable/sortable.component';
import { SweetAlertComponent } from './advance-ui/sweet-alert/sweet-alert.component';
import { BasicElementComponent } from './Forms/basic-element/basic-element.component';
import { AdvancedElementComponent } from './Forms/advanced-element/advanced-element.component';
import { EditorsComponent } from './Forms/editors/editors.component';
import { WizardsComponent } from './Forms/wizards/wizards.component';
import { DatatableComponent } from './table/datatable/datatable.component';
import { BasicTableComponent } from './table/basic-table/basic-table.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ApexComponent } from './chart/apex/apex.component';
import { ChartComponent } from './chart/chart/chart.component';
import { FloatComponent } from './chart/float/float.component';
import { PeityComponent } from './chart/peity/peity.component';
import { SparklineComponent } from './chart/sparkline/sparkline.component';
import { FeatherComponent } from './Icons/feather/feather.component';
import { FlagIconsComponent } from './Icons/flag-icons/flag-icons.component';
import { MdiIconsComponent } from './Icons/mdi-icons/mdi-icons.component';
import { Error404Component } from './error/error404/error404.component';
import { Error500Component } from './error/error500/error500.component';
import { BlankPageComponent } from './general/blank-page/blank-page.component';
import { FaqComponent } from './general/faq/faq.component';
import { InvoiceComponent } from './general/invoice/invoice.component';
import { PricingComponent } from './general/pricing/pricing.component';
import { ProfileComponent } from './general/profile/profile.component';
import { TimelineComponent } from './general/timeline/timeline.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PiechartComponent } from './piechart/piechart.component';
import { Chart1Component } from './chart1/chart1.component';
import { HorzontalchartComponent } from './horzontalchart/horzontalchart.component';
import { LoancountComponent } from './loancount/loancount.component';
import { LoanamountComponent } from './loanamount/loanamount.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { LinechartComponent } from './linechart/linechart.component';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    InboxComponent,
    ReadComponent,
    ComposeComponent,
    ChartsComponent,
    CalendarComponent,
    AccordionComponent,
    AlertsComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CardsComponent,
    CarouselComponent,
    CollapseComponent,
    DropdownsComponent,
    ListGroupComponent,
    MediaObjectComponent,
    ModelComponent,
    NavComponent,
    NavbarComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressComponent,
    CropperComponent,
    OwlCarouselComponent,
    SortableComponent,
    SweetAlertComponent,
    BasicElementComponent,
    AdvancedElementComponent,
    EditorsComponent,
    WizardsComponent,
    DatatableComponent,
    BasicTableComponent,
    LoginComponent,
    RegisterComponent,
    ApexComponent,
    ChartComponent,
    FloatComponent,
    PeityComponent,
    SparklineComponent,
    FeatherComponent,
    FlagIconsComponent,
    MdiIconsComponent,
    Error404Component,
    Error500Component,
    BlankPageComponent,
    FaqComponent,
    InvoiceComponent,
    PricingComponent,
    ProfileComponent,
    TimelineComponent,
    PiechartComponent,
    Chart1Component,
    HorzontalchartComponent,
    LoancountComponent,
   
    LoanamountComponent,
        LinechartComponent,
        LineChartComponent,
        MyLineChartComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    NgApexchartsModule,
    NgChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
