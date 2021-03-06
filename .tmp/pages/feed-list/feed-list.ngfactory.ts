/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './feed-list';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../providers/feed-service';
import * as import10 from 'ionic-angular/navigation/nav-params';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from 'ionic-angular/components/toolbar/toolbar';
import * as import14 from 'ionic-angular/components/navbar/navbar';
import * as import15 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import16 from '@angular/core/src/linker/query_list';
import * as import17 from 'ionic-angular/components/button/button';
import * as import18 from 'ionic-angular/components/menu/menu-toggle';
import * as import19 from 'ionic-angular/components/icon/icon';
import * as import20 from 'ionic-angular/components/content/content';
import * as import21 from '@angular/common/src/directives/ng_if';
import * as import22 from 'ionic-angular/components/list/list';
import * as import23 from '@angular/common/src/directives/ng_for';
import * as import24 from 'ionic-angular/config/config';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from 'ionic-angular/navigation/view-controller';
import * as import27 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import28 from 'ionic-angular/components/app/app';
import * as import29 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import30 from 'ionic-angular/components/menu/menu-controller';
import * as import31 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import32 from 'ionic-angular/util/keyboard';
import * as import33 from '@angular/core/src/zone/ng_zone';
import * as import34 from 'ionic-angular/components/tabs/tabs';
import * as import35 from '@angular/core/src/linker/template_ref';
import * as import36 from 'ionic-angular/gestures/gesture-controller';
import * as import37 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import38 from 'ionic-angular/components/spinner/spinner';
import * as import39 from '../../node_modules/ionic-angular/components/spinner/spinner.ngfactory';
import * as import40 from 'ionic-angular/components/item/item';
import * as import41 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import42 from 'ionic-angular/util/form';
import * as import43 from '@angular/core/src/security';
var renderType_FeedListPage_Host:import0.RenderComponentType = (null as any);
class _View_FeedListPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _FeedListPage_0_4:import3.FeedListPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_FeedListPage_Host0,renderType_FeedListPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-feed-list',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_FeedListPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._FeedListPage_0_4 = new import3.FeedListPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.FeedService),this.parentInjector.get(import10.NavParams));
    this._appEl_0.initComponent(this._FeedListPage_0_4,[],compView_0);
    compView_0.create(this._FeedListPage_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.FeedListPage) && (0 === requestNodeIndex))) { return this._FeedListPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_FeedListPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_FeedListPage_Host === (null as any))) { (renderType_FeedListPage_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,[],{})); }
  return new _View_FeedListPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const FeedListPageNgFactory:import12.ComponentFactory<import3.FeedListPage> = new import12.ComponentFactory<import3.FeedListPage>('page-feed-list',viewFactory_FeedListPage_Host0,import3.FeedListPage);
const styles_FeedListPage:any[] = [];
var renderType_FeedListPage:import0.RenderComponentType = (null as any);
class _View_FeedListPage0 extends import1.AppView<import3.FeedListPage> {
  _text_0:any;
  _el_1:any;
  _Header_1_3:import13.Header;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import2.AppElement;
  _Navbar_3_4:import14.Navbar;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _ToolbarItem_8_3:import15.ToolbarItem;
  _query_Button_8_0:import16.QueryList<any>;
  _text_9:any;
  _el_10:any;
  /*private*/ _appEl_10:import2.AppElement;
  _Button_10_4:import17.Button;
  _MenuToggle_10_5:import18.MenuToggle;
  _ToolbarItem_10_6:import15.ToolbarItem;
  _query_Button_10_0:import16.QueryList<any>;
  _text_11:any;
  _el_12:any;
  _Icon_12_3:import19.Icon;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  /*private*/ _appEl_18:import2.AppElement;
  _Content_18_4:import20.Content;
  _text_19:any;
  _anchor_20:any;
  /*private*/ _appEl_20:import2.AppElement;
  _TemplateRef_20_5:any;
  _NgIf_20_6:import21.NgIf;
  _text_21:any;
  _el_22:any;
  _List_22_3:import22.List;
  _text_23:any;
  _text_24:any;
  _anchor_25:any;
  /*private*/ _appEl_25:import2.AppElement;
  _TemplateRef_25_5:any;
  _NgFor_25_6:import23.NgFor;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_FeedListPage0,renderType_FeedListPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','barbar');
    this._Header_1_3 = new import13.Header(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_1),this.renderer,this.parentInjector.get(import26.ViewController,(null as any)));
    this._text_2 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','barbarbar toolbar');
    this._appEl_3 = new import2.AppElement(3,1,this,this._el_3);
    var compView_3:any = import27.viewFactory_Navbar0(this.viewUtils,this.injector(3),this._appEl_3);
    this._Navbar_3_4 = new import14.Navbar(this.parentInjector.get(import28.App),this.parentInjector.get(import26.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_3),this.renderer);
    this._appEl_3.initComponent(this._Navbar_3_4,[],compView_3);
    this._text_4 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._text_5 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'img',(null as any));
    this.renderer.setElementAttribute(this._el_6,'src','http://1.bp.blogspot.com/-Kq3ywyddDEY/VLL_tKIUX-I/AAAAAAAAdHo/7FN9qWnXe2c/s1600/Logo.png');
    this._text_7 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_8 = this.renderer.createElement((null as any),'ion-buttons',(null as any));
    this.renderer.setElementAttribute(this._el_8,'end','');
    this._ToolbarItem_8_3 = new import15.ToolbarItem(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_8),this.renderer,this.parentInjector.get(import13.Toolbar,(null as any)),this._Navbar_3_4);
    this._query_Button_8_0 = new import16.QueryList<any>();
    this._text_9 = this.renderer.createText(this._el_8,'\n      ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_8,'button',(null as any));
    this.renderer.setElementAttribute(this._el_10,'ion-button','');
    this.renderer.setElementAttribute(this._el_10,'menuToggle','');
    this._appEl_10 = new import2.AppElement(10,8,this,this._el_10);
    var compView_10:any = import29.viewFactory_Button0(this.viewUtils,this.injector(10),this._appEl_10);
    this._Button_10_4 = new import17.Button('','',this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_10),this.renderer);
    this._MenuToggle_10_5 = new import18.MenuToggle(this.parentInjector.get(import30.MenuController),new import25.ElementRef(this._el_10),this.parentInjector.get(import26.ViewController,(null as any)),this._Navbar_3_4);
    this._ToolbarItem_10_6 = new import15.ToolbarItem(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_10),this.renderer,this.parentInjector.get(import13.Toolbar,(null as any)),this._Navbar_3_4);
    this._query_Button_10_0 = new import16.QueryList<any>();
    this._appEl_10.initComponent(this._Button_10_4,[],compView_10);
    this._text_11 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_12 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_12,'name','menu');
    this.renderer.setElementAttribute(this._el_12,'role','img');
    this._Icon_12_3 = new import19.Icon(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_12),this.renderer);
    this._text_13 = this.renderer.createText((null as any),'\n      ',(null as any));
      compView_10.create(this._Button_10_4,[[].concat([
        this._text_11,
        this._el_12,
        this._text_13
      ]
    )],(null as any));
    this._text_14 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_3.create(this._Navbar_3_4,[
      [],
      [],
      [].concat([this._el_8]),
      [].concat([
        this._text_4,
        this._text_5,
        this._el_6,
        this._text_7,
        this._text_15
      ]
      )
    ]
    ,(null as any));
    this._text_16 = this.renderer.createText(this._el_1,'\n',(null as any));
    this._text_17 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_18 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_18,'class','feed-list');
    this.renderer.setElementAttribute(this._el_18,'padding','');
    this._appEl_18 = new import2.AppElement(18,(null as any),this,this._el_18);
    var compView_18:any = import31.viewFactory_Content0(this.viewUtils,this.injector(18),this._appEl_18);
    this._Content_18_4 = new import20.Content(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_18),this.renderer,this.parentInjector.get(import28.App),this.parentInjector.get(import32.Keyboard),this.parentInjector.get(import33.NgZone),this.parentInjector.get(import26.ViewController,(null as any)),this.parentInjector.get(import34.Tabs,(null as any)));
    this._appEl_18.initComponent(this._Content_18_4,[],compView_18);
    this._text_19 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._anchor_20 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_20 = new import2.AppElement(20,18,this,this._anchor_20);
    this._TemplateRef_20_5 = new import35.TemplateRef_(this._appEl_20,viewFactory_FeedListPage1);
    this._NgIf_20_6 = new import21.NgIf(this._appEl_20.vcRef,this._TemplateRef_20_5);
    this._text_21 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_22 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_22_3 = new import22.List(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_22),this.renderer,this.parentInjector.get(import36.GestureController));
    this._text_23 = this.renderer.createText(this._el_22,' ',(null as any));
    this._text_24 = this.renderer.createText(this._el_22,'\n    ',(null as any));
    this._anchor_25 = this.renderer.createTemplateAnchor(this._el_22,(null as any));
    this._appEl_25 = new import2.AppElement(25,22,this,this._anchor_25);
    this._TemplateRef_25_5 = new import35.TemplateRef_(this._appEl_25,viewFactory_FeedListPage2);
    this._NgFor_25_6 = new import23.NgFor(this._appEl_25.vcRef,this._TemplateRef_25_5,this.parentInjector.get(import37.IterableDiffers),this.ref);
    this._text_26 = this.renderer.createText(this._el_22,'\n  ',(null as any));
    this._text_27 = this.renderer.createText((null as any),'\n',(null as any));
    compView_18.create(this._Content_18_4,[
      [],
      [].concat([
        this._text_19,
        this._appEl_20,
        this._text_21,
        this._el_22,
        this._text_27
      ]
      ),
      []
    ]
    ,(null as any));
    this._text_28 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_10,'click',this.eventHandler(this._handle_click_10_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._anchor_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._anchor_25,
      this._text_26,
      this._text_27,
      this._text_28
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.Icon) && (12 === requestNodeIndex))) { return this._Icon_12_3; }
    if (((token === import17.Button) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._Button_10_4; }
    if (((token === import18.MenuToggle) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._MenuToggle_10_5; }
    if (((token === import15.ToolbarItem) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._ToolbarItem_10_6; }
    if (((token === import15.ToolbarItem) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._ToolbarItem_8_3; }
    if (((token === import14.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._Navbar_3_4; }
    if (((token === import13.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._Header_1_3; }
    if (((token === import35.TemplateRef) && (20 === requestNodeIndex))) { return this._TemplateRef_20_5; }
    if (((token === import21.NgIf) && (20 === requestNodeIndex))) { return this._NgIf_20_6; }
    if (((token === import35.TemplateRef) && (25 === requestNodeIndex))) { return this._TemplateRef_25_5; }
    if (((token === import23.NgFor) && (25 === requestNodeIndex))) { return this._NgFor_25_6; }
    if (((token === import22.List) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._List_22_3; }
    if (((token === import20.Content) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._Content_18_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_3:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._MenuToggle_10_5.menuToggle = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_5:any = 'menu';
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._Icon_12_3.name = currVal_5;
      this._expr_5 = currVal_5;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_18_4.ngOnInit(); }
    const currVal_8:any = this.context.loading;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._NgIf_20_6.ngIf = currVal_8;
      this._expr_8 = currVal_8;
    }
    changes = (null as any);
    const currVal_9:any = this.context.articles;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this._NgFor_25_6.ngForOf = currVal_9;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_9,currVal_9);
      this._expr_9 = currVal_9;
    }
    if ((changes !== (null as any))) { this._NgFor_25_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_25_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_10_0.dirty) {
        this._query_Button_10_0.reset([this._Button_10_4]);
        this._ToolbarItem_10_6._buttons = this._query_Button_10_0;
        this._query_Button_10_0.notifyOnChanges();
      }
      if (this._query_Button_8_0.dirty) {
        this._query_Button_8_0.reset([this._Button_10_4]);
        this._ToolbarItem_8_3._buttons = this._query_Button_8_0;
        this._query_Button_8_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Button_10_4.ngAfterContentInit(); }
    }
    const currVal_0:any = this._Navbar_3_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_3,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_3_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_3,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_4:any = this._MenuToggle_10_5.isHidden;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_10,'hidden',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_6:any = this._Icon_12_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_12,'hide',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._Content_18_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_18,'statusbar-padding',currVal_7);
      this._expr_7 = currVal_7;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_3_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_12_3.ngOnDestroy();
    this._Content_18_4.ngOnDestroy();
  }
  private _handle_click_10_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MenuToggle_10_5.toggle()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_FeedListPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.FeedListPage> {
  if ((renderType_FeedListPage === (null as any))) { (renderType_FeedListPage = viewUtils.createRenderComponentType('D:/_WebProjects/_Detzler_App_Postillion_RSS/blank-rss-postillon-ionic2/.tmp/pages/feed-list/feed-list.html',0,import11.ViewEncapsulation.None,styles_FeedListPage,{})); }
  return new _View_FeedListPage0(viewUtils,parentInjector,declarationEl);
}
class _View_FeedListPage1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Spinner_0_4:import38.Spinner;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_FeedListPage1,renderType_FeedListPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-spinner',(null as any));
    this.renderer.setElementAttribute(this._el_0,'id','feed-spinner');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import39.viewFactory_Spinner0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Spinner_0_4 = new import38.Spinner(this.parent.parentInjector.get(import24.Config),new import25.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._Spinner_0_4,[],compView_0);
    compView_0.create(this._Spinner_0_4,[],(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import38.Spinner) && (0 === requestNodeIndex))) { return this._Spinner_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Spinner_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Spinner_0_4.paused;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_0,'spinner-paused',currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_FeedListPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_FeedListPage1(viewUtils,parentInjector,declarationEl);
}
class _View_FeedListPage2 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Item_0_4:import40.Item;
  _ItemContent_0_5:import40.ItemContent;
  _query_Label_0_0:import16.QueryList<any>;
  _query_Button_0_1:import16.QueryList<any>;
  _query_Icon_0_2:import16.QueryList<any>;
  _text_1:any;
  _el_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_FeedListPage2,renderType_FeedListPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','feed-article item item-block');
    this.renderer.setElementAttribute(this._el_0,'text-wrap','');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import41.viewFactory_Item0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Item_0_4 = new import40.Item(this.parent.parentInjector.get(import42.Form),this.parent.parentInjector.get(import24.Config),new import25.ElementRef(this._el_0),this.renderer);
    this._ItemContent_0_5 = new import40.ItemContent();
    this._query_Label_0_0 = new import16.QueryList<any>();
    this._query_Button_0_1 = new import16.QueryList<any>();
    this._query_Icon_0_2 = new import16.QueryList<any>();
    this._appEl_0.initComponent(this._Item_0_4,[],compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','article-title');
    this._el_3 = this.renderer.createElement(this._el_2,'h2',(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._el_5 = this.renderer.createElement((null as any),'br',(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_7 = this.renderer.createElement((null as any),'p',(null as any));
    this._text_8 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._text_9 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_10 = this.renderer.createElement((null as any),'img',(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._query_Label_0_0.reset([]);
    this._Item_0_4.contentLabel = this._query_Label_0_0.first;
    compView_0.create(this._Item_0_4,[
      [],
      [],
      [].concat([
        this._text_1,
        this._el_2,
        this._el_5,
        this._text_6,
        this._el_7,
        this._text_8,
        this._text_9,
        this._el_10,
        this._text_11
      ]
      ),
      [],
      []
    ]
    ,(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import40.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._Item_0_4; }
    if (((token === import40.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._ItemContent_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_0_1.dirty) {
        this._query_Button_0_1.reset([]);
        this._Item_0_4._buttons = this._query_Button_0_1;
        this._query_Button_0_1.notifyOnChanges();
      }
      if (this._query_Icon_0_2.dirty) {
        this._query_Icon_0_2.reset([]);
        this._Item_0_4._icons = this._query_Icon_0_2;
        this._query_Icon_0_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_0_4.ngAfterContentInit(); }
    }
    const currVal_0:any = import4.interpolate(1,'',this.context.$implicit.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_4,currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.context.$implicit.description;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_7,'innerHTML',this.viewUtils.sanitizer.sanitize(import43.SecurityContext.HTML,currVal_1));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'',this.context.$implicit.imgurl,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_10,'src',this.viewUtils.sanitizer.sanitize(import43.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_FeedListPage2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_FeedListPage2(viewUtils,parentInjector,declarationEl);
}