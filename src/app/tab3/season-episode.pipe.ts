import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "seasonEpisode"
})
export class SeasonEpisodePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (args[0] === "e") {
      return Number(String(value).substring(4, 6));
    } else if (args[0] === "s") {
      return Number(String(value).substring(1, 3));
    } else return null;
  }
}
