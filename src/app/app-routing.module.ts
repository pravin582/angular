import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropperComponent } from './advance-ui/cropper/cropper.component';
import { OwlCarouselComponent } from './advance-ui/owl-carousel/owl-carousel.component';
import { SortableComponent } from './advance-ui/sortable/sortable.component';
import { SweetAlertComponent } from './advance-ui/sweet-alert/sweet-alert.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ApexComponent } from './chart/apex/apex.component';
import { ChartComponent } from './chart/chart/chart.component';
import { FloatComponent } from './chart/float/float.component';
import { PeityComponent } from './chart/peity/peity.component';
import { SparklineComponent } from './chart/sparkline/sparkline.component';
import { ChartsComponent } from './charts/charts.component';
import { ComposeComponent } from './compose/compose.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error/error404/error404.component';
import { Error500Component } from './error/error500/error500.component';
import { AdvancedElementComponent } from './Forms/advanced-element/advanced-element.component';
import { BasicElementComponent } from './Forms/basic-element/basic-element.component';
import { EditorsComponent } from './Forms/editors/editors.component';
import { WizardsComponent } from './Forms/wizards/wizards.component';
import { BlankPageComponent } from './general/blank-page/blank-page.component';
import { FaqComponent } from './general/faq/faq.component';
import { InvoiceComponent } from './general/invoice/invoice.component';
import { PricingComponent } from './general/pricing/pricing.component';
import { ProfileComponent } from './general/profile/profile.component';
import { TimelineComponent } from './general/timeline/timeline.component';
import { FeatherComponent } from './Icons/feather/feather.component';
import { FlagIconsComponent } from './Icons/flag-icons/flag-icons.component';
import { MdiIconsComponent } from './Icons/mdi-icons/mdi-icons.component';
import { InboxComponent } from './inbox/inbox.component';
import { ReadComponent } from './read/read.component';
import { BasicTableComponent } from './table/basic-table/basic-table.component';
import { DatatableComponent } from './table/datatable/datatable.component';
import { AccordionComponent } from './ui-kits/accordion/accordion.component';
import { AlertsComponent } from './ui-kits/alerts/alerts.component';
import { BadgesComponent } from './ui-kits/badges/badges.component';
import { BreadcrumbsComponent } from './ui-kits/breadcrumbs/breadcrumbs.component';
import { ButtonGroupComponent } from './ui-kits/button-group/button-group.component';
import { ButtonComponent } from './ui-kits/button/button.component';
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
import { ProgressComponent } from './ui-kits/progress/progress.component';
const routes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path:'dashboard',
    component:DashboardComponent
},
{
  path:'inbox',
  component:InboxComponent
},
{
   path:'compose',
   component:ComposeComponent
},
{
  path:'read',
  component:ReadComponent

},
{
  path:'calendar',
  component:CalendarComponent
},
{
  path:'alert',
  component:AlertsComponent
},
{
  path:'chart',
  component:ChartsComponent
},
{
  path:'accoration',
  component:AccordionComponent
},
{
   path:'badges',
   component:BadgesComponent
},
{
path:'breadcrum',
component:BreadcrumbsComponent
},
{
  path:'button',
  component:ButtonComponent
},
{
  path:'button-group',
  component:ButtonGroupComponent
},
{
  path:'cars',
  component:CardsComponent
},
{
  path:'carousel',
  component:CarouselComponent
},
{
  path:'collapse',
  component:CollapseComponent
},
{
  path:'dropdowns',
  component:DropdownsComponent
},
{
  path:'list-group',
  component:ListGroupComponent
},
{
  path:'media-object',
  component:MediaObjectComponent
},
{
path:'model',
component:ModelComponent
},
{
  path:'nav',
  component:NavComponent
},
{
  path:'navbar',
  component:NavbarComponent
},
{
  path:'pagination',
  component:PaginationComponent
},
{
path:'progress',
component:ProgressComponent
},
{
  path:'cropper',
  component:CropperComponent
},
{
  path:'owl-carousel',
  component:OwlCarouselComponent
},
{
  path:'sortable',
  component:SortableComponent
},
{
  path:'sweet-alert',
  component:SweetAlertComponent
},
{
  path:'basic-element',
  component:BasicElementComponent
},
{
  path:'advance-element',
  component:AdvancedElementComponent
},
{
  path:'edtiors',
  component:EditorsComponent
},
{
  path:'wizard',
  component:WizardsComponent
},
{
  path:'datatable',
  component:DatatableComponent
},
{
  path:'basic-table',
  component:BasicTableComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'apex',
  component:ApexComponent
},
{
  path:'chart',
  component:ChartComponent
},
{
  path:'flot',
  component:FloatComponent
},
{
  path:'peity',
  component:PeityComponent
},
{
  path:'sparkline',
  component:SparklineComponent
},
{
  path:'404',
  component:Error404Component
},
{
  path:'500',
  component:Error500Component
},
{
  path:'feather',
  component:FeatherComponent
},
{
  path:'flag-icons',
  component:FlagIconsComponent
},
{
  path:'mdi-icons',
  component:MdiIconsComponent
},
{
  path:'blank-page',
  component:BlankPageComponent
},
{
  path:'faq',
  component:FaqComponent
},
{
  path:'invoice',
  component:InvoiceComponent
},
{
  path:'profile',
  component:ProfileComponent
},
{
  path:'pricing',
  component:PricingComponent
},
{
  path:'timeline',
  component:TimelineComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
