import { Contact } from './Contact';
<<<<<<< HEAD
export type GroupParticipant = (Contact & {
=======
export declare type GroupParticipant = (Contact & {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    isAdmin?: boolean;
    isSuperAdmin?: boolean;
    admin?: 'admin' | 'superadmin' | null;
});
<<<<<<< HEAD
export type ParticipantAction = 'add' | 'remove' | 'promote' | 'demote';
=======
export declare type ParticipantAction = 'add' | 'remove' | 'promote' | 'demote';
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
export interface GroupMetadata {
    id: string;
    owner: string | undefined;
    subject: string;
    /** group subject owner */
    subjectOwner?: string;
    /** group subject modification date */
    subjectTime?: number;
    creation?: number;
    desc?: string;
    descOwner?: string;
    descId?: string;
    /** is set when the group only allows admins to change group settings */
    restrict?: boolean;
    /** is set when the group only allows admins to write messages */
    announce?: boolean;
    /** number of group participants */
    size?: number;
    participants: GroupParticipant[];
    ephemeralDuration?: number;
    inviteCode?: string;
}
export interface WAGroupCreateResponse {
    status: number;
    gid?: string;
    participants?: [{
        [key: string]: {};
    }];
}
export interface GroupModificationResponse {
    status: number;
    participants?: {
        [key: string]: {};
    };
}
