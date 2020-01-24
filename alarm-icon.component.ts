import { Component, Input } from "@angular/core";
import { Severity } from "@c8y/client";

/**
 * Reusable component that displays an icon based on an icon severity.
 */
@Component({
  selector: "c8y-alarm-icon",
  templateUrl: "./alarm-icon.component.html"
})
export class AlarmIcon {
  /** Icon to display */
  public icon: string;

  /** A CSS class name with respect to the alarm severity */
  public alarmSeverity: string;

  /** The alarm severity */
  @Input() set severity(severity: Severity) {
    switch (severity) {
      case Severity.CRITICAL:
        this.icon = "warning";
        break;
      case Severity.MAJOR:
      case Severity.MINOR:
        this.icon = "exclamation-circle";
        break;
      case Severity.WARNING:
        this.icon = "circle";
    }

    this.alarmSeverity = `${severity}`.toLowerCase();
  }
}
