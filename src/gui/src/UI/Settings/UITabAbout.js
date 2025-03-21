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

// About
export default {
    id: 'about',
    title_i18n_key: 'about',
    icon: '',
    html: () => {
        return `
            <div class="about-container">
                <div class="about">
                    <a href="https://forkware.io" target="_blank" class="logo"><img src="/images/logo.png"></a>
                    <p class="description">${i18n('puter_description')}</p>
                    <p class="links">
                        <a href="mailto:hey@forkware.io" target="_blank">hey@forkware.io</a>
                        <span style="color: #CCC;">•</span>
                        <a href="https://docs.forkware.io" target="_blank">${i18n('developers')}</a>
                        <span style="color: #CCC;">•</span>
                        <a href="https://status.forkware.io" target="_blank">${i18n('status')}</a>
                        <span style="color: #CCC;">•</span>
                        <a href="https://forkware.io/terms" target="_blank">${i18n('terms')}</a>
                        <span style="color: #CCC;">•</span>
                        <a href="https://forkware.io/privacy" target="_blank">${i18n('privacy')}</a>
                        <span style="color: #CCC;">•</span>
                        <a href="#" class="show-credits">${i18n('credits')}</a>
                    </p>
                    <div class="social-links">
                        <a href="https://x.com/ForkwareDeOS" target="_blank">
                            <svg viewBox="0 0 24 24" aria-hidden="true" style="opacity: 0.7;"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                        </a>
                    </div>
                </div>
                <div class="version"></div>
    
                <dialog class="credits">
                    <div class="credit-content">
                        <p style="margin: 0; font-size: 18px; text-align: center;">${i18n('oss_code_and_content')}</p>
                        <div style="max-height: 300px; overflow-y: scroll;">
                            <ul style="padding-left: 25px; padding-top:15px;">
                                <li>FileSaver.js <a target="_blank" href="https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md">${i18n('license')}</a></li>
                                <li>html-entities <a target="_blank" href="https://github.com/mdevils/html-entities/blob/master/LICENSE">${i18n('license')}</a></li>
                                <li>iro.js <a target="_blank" href="https://github.com/jaames/iro.js/blob/master/LICENSE.txt">${i18n('license')}</a></li>
                                <li>jQuery <a target="_blank" href="https://jquery.org/license/">${i18n('license')}</a></li>
                                <li>jQuery-dragster <a target="_blank" href="https://github.com/catmanjan/jquery-dragster/blob/master/LICENSE">${i18n('license')}</a></li>
                                <li>jQuery-menu-aim <a target="_blank" href="https://github.com/kamens/jQuery-menu-aim?tab=readme-ov-file#faq">${i18n('license')}</a></li>
                                <li>jQuery UI <a target="_blank" href="https://jquery.org/license/">${i18n('license')}</a></li>
                                <li>lodash <a target="_blank" href="https://lodash.com/license">${i18n('license')}</a></li>
                                <li>mime <a target="_blank" href="https://github.com/broofa/mime/blob/main/LICENSE">${i18n('license')}</a></li>
                                <li>qrcodejs <a target="_blank" href="https://github.com/davidshimjs/qrcodejs/blob/master/LICENSE">${i18n('license')}</a></li>
                                <li>Selection <a target="_blank" href="https://github.com/simonwep/selection/blob/master/LICENSE">${i18n('license')}</a></li>
                                <li>socket.io <a target="_blank" href="https://github.com/socketio/socket.io/blob/main/LICENSE">${i18n('license')}</a></li>
                                <li>Wallpaper by <a target="_blank" href="https://unsplash.com/@fakurian?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Milad Fakurian</a> on <a target="_blank" href="https://unsplash.com/photos/blue-orange-and-yellow-wallpaper-E8Ufcyxz514?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></li>
                                <li>Inter font by The Inter Project Authors <a target="_blank" href="https://github.com/rsms/inter">${i18n('license')}</a></li>                            
                            </ul>
                        </div>
                    </div>
                </dialog>
            </div>`;
    },
    init: ($el_window) => {
        // server and version infomration
        puter.os.version()
        .then(res => {
            const deployed_date = new Date(res.deploy_timestamp).toLocaleString();
            $el_window.find('.version').html(`Version: 1.0.0 &bull; Server: ${html_encode(res.location)} &bull; Deployed: ${html_encode(deployed_date)}`);
        })
        .catch(error => {
            console.error("Failed to fetch server info:", error);
            $el_window.find('.version').html("Failed to load version information.");
        });

        $el_window.find('.credits').on('click', function (e) {
            if($(e.target).hasClass('credits')){
                $('.credits').get(0).close();
            }
        });

        $el_window.find('.show-credits').on('click', function (e) {
            $('.credits').get(0).showModal();
        })

    },
};
