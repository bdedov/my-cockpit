import { Component, Input, OnInit } from "@angular/core";
import { AlarmService, IAlarm, RealtimeAction } from "@c8y/client";
import { Observable, of } from "rxjs";

/**
 * Displays a list of active alarms for the configured device.
 */
@Component({
  selector: "c8y-alarm-list",
  templateUrl: "./alarm-list.component.html"
})
export class AlarmList implements OnInit {
  /**
   * Observable list of active alarms.
   */
  public list: Observable<IAlarm[]> = of([]);

  /**
   * Receives the widget configuration.
   */
  @Input() config: any;

  public constructor(private alarmService: AlarmService) {}

  /**
   * Requests alarm list when component is initialized.
   */
  public ngOnInit(): void {
    this.list = this.alarmService.listBySource$(
      this.config.device.id,
      {},
      {
        realtime: true,
        realtimeAction: RealtimeAction.FULL
      }
    );
  }
}
