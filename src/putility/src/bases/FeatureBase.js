/*
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
const { BasicBase } = require("./BasicBase");

class FeatureBase extends BasicBase {
    constructor (parameters, ...a) {
        super(parameters, ...a);
        
        this._ = {
            features: this._get_merged_static_array('FEATURES'),
        };

        for ( const feature of this._.features ) {
            feature.install_in_instance(
                this,
                {
                    parameters: parameters || {},
                }
            )
        }
    }
}

module.exports = {
    FeatureBase,
};
