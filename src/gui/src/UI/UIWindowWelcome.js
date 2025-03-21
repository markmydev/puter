/**
 * Copyright (C) 2024-present Puter Technologies Inc.
 *
 * This file is part of Puter.
 *
 * Puter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import UIWindow from './UIWindow.js'

async function UIWindowWelcome(options){

    options = options ?? {};

    let h = '';
    // close button containing the multiplication sign
    h += `<div class="generic-close-window-button welcome-window-close-button"> &times; </div>`;
    h += `<div style="display:flex; flex-direction: colum;">`;
        h += `<div style="overflow: hidden; width: 200px; max-width: 200px; min-width: 200px; background: linear-gradient(45deg, #3d476b, #000); min-height: 400px; padding: 20px; box-sizing: border-box;">`;
            h += `<img style="display: block; margin: 45px auto 0; width: 270px; opacity: 0.5;" src="">`;
        h += `</div>`;
        h += `<div style="flex-grow: 1; padding-left: 50px; padding-top: 70px; padding-right: 50px;">`;
            h += `<h1 style="font-size: 25px; font-weight: 300; -webkit-font-smoothing: antialiased; color: #545763;">F.O.R.K.W.A.R.E. <br>Fork it. Ship it.<br>Let A.I do the rest.</h1>`;
            h += `<p style="margin-top: 25px; font-size: 16px; font-weight: 300; -webkit-font-smoothing: antialiased; color: #3e4251;">Store, play, build awesome apps, and much more! All in one place, accessible from anywhere at any time.</p>`;
            h += `<button class="welcome-window-get-started" style="font-size: 15px; font-weight: 300; -webkit-font-smoothing: antialiased; cursor: pointer; padding: 8px 20px; border-radius: 5px; text-decoration: none; margin-right: 20px; border: 1px solid #656565 !important; background: none; margin-top: 10px;">Get Started</button>`;
            h += `<div class="welcome-window-footer">`;
                h += `<a href="/terms" target="_blank">Terms</a>`;
                h += `<a href="/privacy" style="margin-left: 20px;" target="_blank">Privacy</a>`;
                h += `<a href="https://developer.forkware.io" style="margin-left: 20px;" target="_blank">Developers</a>`;
                h += `<a href="https://forkware.io" style="margin-left: 20px;" target="_blank">Open Source</a>`;
            h += `</div>`;
        h += `</div>`;
    h += `</div>`;

    const el_window = await UIWindow({
        title: 'Instant Login!',
        app: 'instant-login',
        single_instance: true,
        icon: null,
        uid: null,
        is_dir: false,
        body_content: h,
        has_head: false,
        selectable_body: false,
        allow_context_menu: false,
        is_resizable: false,
        is_droppable: false,
        init_center: true,
        allow_native_ctxmenu: false,
        allow_user_select: false,
        backdrop: true,
        close_on_backdrop_click: false,
        backdrop_covers_toolbar: true,
        width: 650,
        height: 'auto',
        dominant: true,
        show_in_taskbar: false,
        draggable_body: true,
        fadeIn: 1000,
        onAppend: function(this_window){
        },
        window_class: 'window-welcome',
        on_close: function(){
            // save the fact that the user has seen the welcome window
            puter.kv.set('has_seen_welcome_window', true);
        },
        body_css: {
            width: 'initial',
            height: '100%',
            'background-color': 'rgb(245 247 249)',
            'backdrop-filter': 'blur(3px)',
            padding: '0',
        },
    })

    $(document).on('click', '.welcome-window-get-started', function(){
        $(el_window).close();
    })
}

export default UIWindowWelcome