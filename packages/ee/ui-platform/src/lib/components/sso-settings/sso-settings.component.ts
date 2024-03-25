import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Platform } from '@activepieces/shared';
import { fadeInUp400ms } from '@activepieces/ui/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { FederatedAuthnProviderEnum } from './federated-authn-provider.enum';
import { PlatformSettingsBaseComponent } from '../platform-settings-base.component';

@Component({
  selector: 'app-sso-settings',
  templateUrl: './sso-settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms],
})
export class SsoSettingsComponent
  extends PlatformSettingsBaseComponent
  implements OnInit
{
  platform$?: BehaviorSubject<Platform>;
  addDomain$?: Observable<string>;
  removeDomain$?: Observable<void>;
  FederatedAuthnProviderEnum = FederatedAuthnProviderEnum;
  upgradeNoteTitle = $localize`Enable Single Sign On`;
  upgradeNote = $localize`Let your users sign in with your current SSO provider or give them self serve sign up access`;
  ngOnInit(): void {
    if (this.platform) {
      this.platform$ = new BehaviorSubject(this.platform);
    }
  }

  platformUpdated(platform: Platform) {
    if (this.platform$) {
      this.platform$.next(platform);
    }
  }
}
