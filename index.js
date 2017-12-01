/*
 * Copyright (C) 2017 ExE Boss
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";
module.exports = leftPad;

/**
 * Left pads a String.
 *
 * @param	{String}	string	The string to left pad.
 * @param	{Number}	[size=0]	The size to expand the string to.
 * @param	{String}	[c=" "]	The character to use to pad the string.
 *
 * @returns {String} The left padded string.
 */
function leftPad(string, size = 0, c = " ") {
	c	= String(c);
	string	= String(string);
	size	-= string.length;
	return	(size > 0 ? c[0].repeat(size) : "") + string;
}
