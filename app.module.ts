import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule as NgRouterModule } from "@angular/router";
import { UpgradeModule as NgUpgradeModule } from "@angular/upgrade/static";
import { CoreModule, HOOK_COMPONENT, RouterModule } from "@c8y/ngx-components";
import { AssetsNavigatorModule } from "@c8y/ngx-components/assets-navigator";
import { ContextDashboardModule } from "@c8y/ngx-components/context-dashboard";
import {
  HybridAppModule,
  UpgradeModule,
  UPGRADE_ROUTES
} from "@c8y/ngx-components/upgrade";
import { AlarmIcon } from "./alarm-icon.component";
import { AlarmList } from "./alarm-list.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    NgRouterModule.forRoot([...UPGRADE_ROUTES], {
      enableTracing: false,
      useHash: true
    }),
    CoreModule.forRoot(),
    AssetsNavigatorModule,
    NgUpgradeModule,
    ContextDashboardModule,
    // Upgrade module must be the last
    UpgradeModule
  ],
  declarations: [AlarmList, AlarmIcon],
  entryComponents: [AlarmList],
  providers: [
    {
      provide: HOOK_COMPONENT,
      multi: true,
      useValue: {
        id: "net.bdedov.angular-alarm-widget",
        label: "Angular Alarm List Widget",
        description: "Displays active alarms for a configured device.",
        component: AlarmList
      }
    }
  ]
})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}
