/*
 * Copyright 2021-2023 mtripg6666tdr
 * 
 * This file is part of mtripg6666tdr/Discord-SimpleMusicBot. 
 * (npm package name: 'discord-music-bot' / repository url: <https://github.com/mtripg6666tdr/Discord-SimpleMusicBot> )
 * 
 * mtripg6666tdr/Discord-SimpleMusicBot is free software: you can redistribute it and/or modify it 
 * under the terms of the GNU General Public License as published by the Free Software Foundation, 
 * either version 3 of the License, or (at your option) any later version.
 *
 * mtripg6666tdr/Discord-SimpleMusicBot is distributed in the hope that it will be useful, 
 * but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with mtripg6666tdr/Discord-SimpleMusicBot. 
 * If not, see <https://www.gnu.org/licenses/>.
 */

import type { CommandArgs } from ".";
import type { CommandMessage } from "../Component/commandResolver/CommandMessage";
import type { i18n } from "i18next";

import { BaseCommand } from ".";

export default class Volume extends BaseCommand {
  constructor(){
    super({
      alias: ["volume", "vol"],
      unlist: false,
      category: "voice",
      argument: [{
        type: "integer",
        name: "volume",
        required: false,
      }],
      requiredPermissionsOr: ["admin", "sameVc"],
      shouldDefer: false,
      examples: true,
      usage: true,
    });
  }

  async run(message: CommandMessage, context: CommandArgs, t: i18n["t"]){
    context.server.updateBoundChannel(message);
    if(context.rawArgs === ""){
      await message.reply(`:loud_sound:${t("commands:volume.currentVolume", { volume: context.server.player.volume })}`)
        .catch(this.logger.error)
      ;
      return;
    }
    const newval = Number(context.rawArgs);
    if(isNaN(newval) || newval < 1 || newval > 200){
      message.reply(`:bangbang:${t("commands:volume.outOfRange")}`)
        .catch(this.logger.error);
      return;
    }
    // 音量変更が即反映されたか？
    const result = context.server.player.setVolume(newval);
    await message.reply(
      `:loud_sound:${t("commands:volume.changed", { volume: newval })}\r\n`
      + (
        context.server.player.isPlaying && !result
          ? t("commands:volume.appliedFromNext")
          : ""
      )
    )
      .catch(this.logger.error);
  }
}
