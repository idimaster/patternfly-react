import * as React from 'react'

import { SidebarStore } from './store';

export function VSidebar(constructor : typeof React.Component & SidebarStore) : any {
    const OriginalType: typeof React.Component = constructor as typeof React.Component;

    class VSidebarTrait extends OriginalType<any, any> {

        render(): React.ReactElement<{ label: string}> {
            return (
                <div className="nav-pf-vertical nav-pf-vertical-with-sub-menus hide-nav-pf">
                    <ul className="list-group">
                        {(this as SidebarStore).getItems() ? (this as SidebarStore).getItems() : null}
                    </ul>
                </div>)
        }
    }

    return VSidebarTrait;
}