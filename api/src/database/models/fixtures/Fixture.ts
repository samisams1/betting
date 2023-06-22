import { Base } from '../Base';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Odd } from '../odds/Odd';

/**
 * Available fixtures status
 * __________________________
 * TBD : Time To Be Defined
 * NS : Not Started
 * 1H : First Half, Kick Off
 * HT : Halftime
 * 2H : Second Half, 2nd Half Started
 * ET : Extra Time
 * P : Penalty In Progress
 * FT : Match Finished
 * AET : Match Finished After Extra Time
 * PEN : Match Finished After Penalty
 * BT : Break Time (in Extra Time)
 * SUSP : Match Suspended
 * INT : Match Interrupted
 * PST : Match Postponed
 * CANC : Match Cancelled
 * ABD : Match Abandoned
 * AWD : Technical Loss
 * WO : WalkOver
 * __________________________
 * Update Frequency : This endpoint is updated every 15 seconds.
 * Recommended Calls : 1 call per minute for the leagues, teams,
 * fixtures who have at least one fixture in progress otherwise 1 call per day.
 */
@ObjectType()
class Period {
  @Field(returns => Number, {nullable: true})
  @Prop()
  first: number | null;
  @Field(returns => Number, {nullable: true})
  @Prop()
  second: number | null;
}

@ObjectType()
class Team {
  @Field(returns => Number)
  @Prop()
  id: number;
  @Field(returns => String)
  @Prop()
  name: string;
  @Field(returns => String)
  @Prop()
  logo: string;
}

@ObjectType()
class Goal {
  @Field(returns => Number, {nullable: true})
  @Prop()
  home: number | null;
  @Field(returns => Number, {nullable: true})
  @Prop()
  away: number | null;
}

@ObjectType()
class Score {
  @Field(returns => Goal)
  @Prop()
  halftime: Goal;

  @Field(returns => Goal)
  @Prop()
  fulltime: Goal;

  @Field(returns => Goal)
  @Prop()
  extratime: Goal;

  @Field(returns => Goal)
  @Prop()
  penality: Goal;
}

@ObjectType()
class Teams {
  @Field(returns => Team)
  @Prop()
  home: Team;
  @Field(returns => Team)
  @Prop()
  away: Team;
}

@ObjectType()
@Schema()
export class Fixture extends Base {
  @Field()
  @Prop()
  id: string;

  @Field()
  @Prop()
  referee: string;

  @Field()
  @Prop()
  timezone: string;

  @Field()
  @Prop()
  date: string;

  @Field()
  @Prop()
  timestamp: string;

  @Field(returns => Period)
  @Prop()
  periods: Period;

  @Field()
  @Prop()
  league: number;

  @Field()
  @Prop()
  status: string;

  @Field(returns => Teams)
  @Prop()
  teams: Teams;

  @Field(returns => Goal)
  @Prop()
  goals: Goal;

  @Field(returns => Score)
  @Prop()
  score: Score;

  @Field(returns => [Odd], {nullable: true})
  odds: Odd[];
}

export const FixtureSchema = SchemaFactory.createForClass(Fixture);
