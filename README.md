# nodejs-trello-api
A NodeJS API Wrapper for Trello

# Usage
    import * as trello from './node-trello-api.js';

# Documentation

**Organizations**

Get All organizations

    const organization = await trello.GetAllOrganizations();

Get All organization ID's

    const organization = await trello.GetAllOrganizations();
    const organizationIds = organization.map(org => org.id);

Get All organization Names

    const organization = await trello.GetAllOrganizations();
    const organizationNames = organization.map(org => org.name);

Get All organization Boards

    const organization = await trello.GetAllOrganizations();
    const organizationBoards = organization.map(org => org.boards);

Get All organization Boards ID's

    const organization = await trello.GetAllOrganizations();
    const organizationBoardsIds = organization.map(org => org.boards.map(board => board.id));

Get All organization Boards Names

    const organization = await trello.GetAllOrganizations();
    const organizationBoardsNames = organization.map(org => org.boards.map(board => board.name));

Get All organization Boards Lists

    const organization = await trello.GetAllOrganizations();
    const organizationBoardsLists = organization.map(org => org.boards.map(board => board.lists));

Get All organization Boards Lists ID's

    const organization = await trello.GetAllOrganizations();
    const organizationBoardsListsIds = organization.map(org => org.boards.map(board => board.lists.map(list => list.id)));

Get All organization Boards Lists Names
    
    const organization = await trello.GetAllOrganizations();
    const organizationBoardsListsNames = organization.map(org => org.boards.map(board => board.lists.map(list => list.name)));

Get All organization Boards Lists Cards

    const organization = await trello.GetAllOrganizations();
    const organizationBoardsListsCards = organization.map(org => org.boards.map(board => board.lists.map(list => list.cards)));

Get All organization Boards Lists Cards ID's

    const organization = await trello.GetAllOrganizations();
    const organizationBoardsListsCardsIds = organization.map(org => org.boards.map(board => board.lists.map(list => list.cards.map(card => card.id))));

Get All organization Boards Lists Cards Names

    const organization = await trello.GetAllOrganizations();
    const organizationBoardsListsCardsNames = organization.map(org => org.boards.map(board => board.lists.map(list => list.cards.map(card => card.name))));

Get All organization Boards Lists Cards Checklists
        
    const organization = await trello.GetAllOrganizations();
    const organizationBoardsListsCardsChecklists = organization.map(org => org.boards.map(board => board.lists.map(list => list.cards.map(card => card.checklists))));

Get All organization Boards Lists Cards Checklists ID's

    const organization = await trello.GetAllOrganizations();
    const organizationBoardsListsCardsChecklistsIds = organization.map(org => org.boards.map(board => board.lists.map(list => list.cards.map(card => card.checklists.map(checklist => checklist.id)))));

Get All organization Boards Lists Cards Checklists Names

    const organization = await trello.GetAllOrganizations();
    const organizationBoardsListsCardsChecklistsNames = organization.map(org => org.boards.map(board => board.lists.map(list => list.cards.map(card => card.checklists.map(checklist => checklist.name)))));

Get All organization Boards Lists Cards Checklists Items

    const organization = await trello.GetAllOrganizations();
    const organizationBoardsListsCardsChecklistsItems = organization.map(org => org.boards.map(board => board.boards.map(list => list.cards.map(card => card.checklists.map(checklist => checklist.items)))));

Get All organization Boards Lists Cards Checklists Items ID's

    const organization = await trello.GetAllOrganizations();
    const organizationBoardsListsCardsChecklistsItemsIds = organization.map(org => org.boards.map(board => board.boards.map(list => list.cards.map(card => card.checklists.map(checklist => checklist.items.map(item => item.id))))));
    
Get organization
        
    const organization = await trello.GetOrganization('id');

Create organization

    await trello.CreateOrganization(name);

Delete organization

    await trello.DeleteOrganization(orgid);

**Boards**

Get All Trello Boards

    const boards await trello.GetAllBoards();
    
Get All Trello Board ID's

    const boards = await trello.GetAllBoards();
    const 'Board ID's = boards.map(board => board.id);

Get All Trello Board Names
    
    const boards = await trello.GetAllBoards();
    const boardNames = boards.map(board => board.name);

Get Board by ID

    const board = await trello.GetBoardById('Board ID');

Get Board Name by ID

    const board = await trello.GetBoardById('Board ID');
    const boardName = board.name;

Update Board Name

    await trello.UpdateBoardName('Board ID', 'New Board Name');

Update Board Description

    await trello.UpdateBoardDescription('Board ID', 'New Board Description');
        
Update Board Closed

    await trello.UpdateBoardClosed('Board ID', [true, false]);
    
Update Board Archived
    
    await trello.UpdateBoardArchived('Board ID', [true, false]);
    
Update Board Pinned
    
    await trello.UpdateBoardPinned('Board ID', [true, false]);

Update Board Pos

    await trello.UpdateBoardPos('Board ID', 'New Board Position');

Create Board
    trello.CreateBoard('Board Name', 'Organization ID');

Delete Board

    await trello.DeleteBoard('Board ID');
        
**Memberships**

Get All Trello Board Memberships

    const memberships = await trello.GetBoardMemberships('Board ID');

Get All Trello Board Membership IDs

    const memberships = await trello.GetBoardMemberships('Board ID');
    const membershipIds = memberships.map(membership => membership.id);

Get All Trello Board Membership Names

    const memberships = await trello.GetBoardMemberships('Board ID');
    const membershipNames = memberships.map(membership => membership.fullName);

Get All Trello Board Membership Emails

    const memberships = await trello.GetBoardMemberships('Board ID');
    const membershipEmails = memberships.map(membership => membership.email);

Get All Trello Board Membership IDs by Email

    const memberships = await trello.GetBoardMemberships('Board ID');
    const membershipIds = memberships.map(membership => membership.id);
    const membershipIdsByEmail = membershipIds.map(membershipId => {
        const membership = await trello.GetBoardMemberships('Board ID');
        const membershipEmail = membership.email;
        return membershipId;
    }).filter(membershipId => membershipId !== undefined);
    
Get All Trello Board Membership Names by Email

    const memberships = await trello.GetBoardMemberships('Board ID');
    const membershipNames = memberships.map(membership => membership.fullName);
    const membershipNamesByEmail = membershipNames.map(membershipName => {
        const membership = await trello.GetBoardMemberships('Board ID');
        const membershipEmail = membership.email;
        return membershipName;
    }).filter(membershipName => membershipName !== undefined);

Get All Trello Board Membership Emails by ID

    const memberships = await trello.GetBoardMemberships('Board ID');
    const membershipEmails = memberships.map(membership => membership.email);
    const membershipEmailsById = membershipEmails.map(membershipEmail => {
        const membership = await trello.GetBoardMemberships('Board ID');
        const membershipId = membership.id;
        return membershipEmail;
    }).filter(membershipEmail => membershipEmail !== undefined);

Get All Trello Board Membership IDs by ID

    const memberships = await trello.GetBoardMemberships('Board ID');
    const membershipIds = memberships.map(membership => membership.id);
    const membershipIdsById = membershipIds.map(membershipId => {
        const membership = await trello.GetBoardMemberships('Board ID');
        const membershipId = membership.id;
        return membershipId;
    }).filter(membershipId => membershipId !== undefined);

Get All Trello Board Membership Names by ID

    const memberships = await trello.GetBoardMemberships('Board ID');
    const membershipNames = memberships.map(membership => membership.fullName);
    const membershipNamesById = membershipNames.map(membershipName => {
        const membership = await trello.GetBoardMemberships('Board ID');
        const membershipId = membership.id;
        return membershipName;
    }).filter(membershipName => membershipName !== undefined);
    
Get All Trello Board Membership Emails by Name

    const memberships = await trello.GetBoardMemberships('Board ID');
    const membershipEmails = memberships.map(membership => membership.email);
    const membershipEmailsByName = membershipEmails.map(membershipEmail => {
        const membership = await trello.GetBoardMemberships('Board ID');
        const membershipName = membership.fullName;
        return membershipEmail;
    }).filter(membershipEmail => membershipEmail !== undefined);
    
Get All Trello Board Membership IDs by Name

    const memberships = await trello.GetBoardMemberships('Board ID');
    const membershipIds = memberships.map(membership => membership.id);
    const membershipIdsByName = membershipIds.map(membershipId => {
        const membership = await trello.GetBoardMemberships('Board ID');
        const membershipName = membership.fullName;
        return membershipId;
    }).filter(membershipId => membershipId !== undefined);

Get All Trello Board Membership Names by Name

    const memberships = await trello.GetBoardMemberships('Board ID');
    const membershipNames = memberships.map(membership => membership.fullName);
    const membershipNamesByName = membershipNames.map(membershipName => {
        const membership = await trello.GetBoardMemberships('Board ID');
        const membershipName = membership.fullName;
        return membershipName;
    }).filter(membershipName => membershipName !== undefined);

Get Board Membership by ID

    const membership = await trello.GetBoardMembershipById(membershipId);

Get Board Membership Name by ID

    const membership = await trello.GetBoardMembershipById(membershipId);
    const membershipName = membership.fullName;

Get Board Membership Email by ID

    const membership = await trello.GetBoardMembershipById(membershipId);
    const membershipEmail = membership.email;
    
Get Board Membership by Email

    const membership = await trello.GetBoardMembershipByEmail(membershipEmail);
    const membershipId = membership.id;
    
Get Board Membership Name by Email

    const membership = await trello.GetBoardMembershipByEmail(membershipEmail);
    const membershipName = membership.fullName;

Get Board Membership by Name

    const membership = await trello.GetBoardMembershipByName(membershipName);
    const membershipId = membership.id;

Get Board Membership Email by Name

    const membership = await trello.GetBoardMembershipByName(membershipName);
    const membershipEmail = membership.email;

Update Membership by ID

    const membership = await trello.GetBoardMembershipById(membershipId);
    const newMembershipName = 'New Membership Name';
    const newMembershipEmail = 'New Membership Email';
    await trello.UpdateBoardMembership(membership, newMembershipName, newMembershipEmail);

Update Membership by Email

    const membership = await trello.GetBoardMembershipByEmail(membershipEmail);
    const newMembershipName = 'New Membership Name';
    const newMembershipEmail = 'New Membership Email';
    await trello.UpdateBoardMembership(membership, newMembershipName, newMembershipEmail);

Update Membership by Name

    const membership = await trello.GetBoardMembershipByName(membershipName);
    const newMembershipName = 'New Membership Name';
    const newMembershipEmail = 'New Membership Email';
    await trello.UpdateBoardMembership(membership, newMembershipName, newMembershipEmail);

Delete Membership

    const membership = await trello.GetBoardMembershipById(membershipId);
    await trello.DeleteMembership(membership);

**Cards**

Get All Board Cards

    const cards = await trello.GetBoardCards('Board ID');

Get All Board Card ID's;

    const cards = await trello.GetBoardCards('Board ID');
    const 'Card ID's = cards.map(card => card.id);

Get All Board Card Names

    const cards = await trello.GetBoardCards('Board ID');
    const cardNames = cards.map(card => card.name);

Get Board Card by ID

    const card = await trello.GetBoardCardsById('Card ID');
    
Get Board Card Name by ID

    const card = await trello.GetBoardCardsById('Card ID');
    const cardName = card.name;

Get Board Card by Name

    const card = await trello.GetBoardCardsByName(cardName);    
    const 'Card ID' = card.id;

Update Board Card Names

    await trello.UpdateBoardCardName('Board ID', ['cardName1', 'cardName2']);
    
Update Board Card Descriptions

    await trello.UpdateBoardCardDescription('Board ID', ['cardDescription1', 'cardDescription2']);

Update Board Card Positions

    await trello.UpdateBoardCardPosition('Board ID', [1, 2]);

Update Board Card Closed 

    await trello.UpdateBoardCardClosed('Board ID', [true, false]);
    
Create Board Card

    await trello.CreateCard('Card Name', 'List ID');


Delete Card

    await trello.DeleteCard('Card ID');

**Lists**

Get All Board Lists

    const lists = await trello.GetBoardLists('Board ID');

Get All Board List ID's

    const lists = await trello.GetBoardLists('Board ID');
    const listIds = lists.map(list => list.id);

Get All Board List Names

    const lists = await trello.GetBoardLists('Board ID');
    const listNames = lists.map(list => list.name);

Get Board List By ID

    const list = await trello.GetBoardListsById(listId);

Get Board List Name By ID

    const list = await trello.GetBoardListsById(listId);
    const listName = list.name;

Get Board List By Name

    const list = await trello.GetBoardListsByName(listName);
    const listId = list.id;

Get Board List ID by Name

    const list = await trello.GetBoardListsByName(listName);
    const listId = list.id;

Update Board List Name

    await trello.UpdateBoardListName('Board ID', 'New List Name');

Update Board List Position

    await trello.UpdateBoardListPosition('Board ID', newBoardListPosition);

Update Board List Closed

    await trello.UpdateBoardListClosed('Board ID', [true, false]);

Update List Descripion

    await trello.UpdateListDescription(listid, 'New List Description');

Create Board List

    await trello.CreateList('List Name', 'Board ID');

Archive List

    await trello.ArchiveList(listid);

UnArchive List

    await trello.UnArchiveList(listid);

**Checklists**

Get All Board Checklists

    const checklists = await trello.GetBoardChecklists('Board ID');

Get All Board Checklist ID's

    const checklists = await trello.GetBoardChecklists('Board ID');
    const checklistIds = checklists.map(checklist => checklist.id);

Get All Board Checklist Names

    const checklists = await trello.GetBoardChecklists('Board ID');
    const checklistNames = checklists.map(checklist => checklist.name);
    
Get Board Checklist By ID

    const checklist = await trello.GetBoardChecklistsById(checklistId);

Get Board Checklist Name By ID

    const checklist = await trello.GetBoardChecklistsById(checklistId);
    const checklistName = checklist.name;

Get Board Checklist Items

    const checklistItems = await trello.GetBoardChecklistsItems(checklistId);

Get Board Checklist Item Names

    const checklistItems = await trello.GetBoardChecklistsItems(checklistId);
    const checklistItemNames = checklistItems.map(checklistItem => checklistItem.name);

Get Board Checklist Item By ID

    const checklistItem = await trello.GetBoardChecklistItemsById('Checklist Item ID');

Update Board Checklist Item Name

    await trello.UpdateBoardChecklistItemName('Checklist Item ID', newChecklistItemName);

Update Board Checklist Item Position

    await trello.UpdateBoardChecklistItemPosition('Checklist Item ID', newChecklistItemPosition);

Update Board Checklist Item State

    await trello.UpdateBoardChecklistItemState('Checklist Item ID', newChecklistItemState);

Update Board Checklist Item Descripion

    await trello.UpdateBoardChecklistItemDescription('Checklist Item ID', 'New Description');

Create Checklist

    await trello.CreateChecklist('Checklist Name', 'Card ID');

Create Checklist Item

    await trello.CreateChecklistItem('Checklist Item Name', 'Checklist ID')

Delete Checklist

    await trello.DeleteChecklist('Checklist ID');

Delete Checklist Item
    
    await trello.DeleteChecklistItem('Checklist ID', 'Checklist Item ID');

**Labels**

Get All Board Labels

    const labels = await trello.GetBoardLabels('Board ID');

Get All Board Label ID's

    const labels = await trello.GetBoardLabels('Board ID');
    const labelIds = labels.map(label => label.id);

Get All Board Label Names

    const labels = await trello.GetBoardLabels('Board ID');
    const labelNames = labels.map(label => label.name);

Get Board Label By ID

    const label = await trello.GetBoardLabelById(labelId);

Get Board Label Name By ID

    const label = await trello.GetBoardLabelById(labelId);
    const labelName = label.name;

Get Board Label Color By ID

    const label = await trello.GetBoardLabelById(labelId);
    const labelColor = label.color;

Get Board Label By Name

    const label = await trello.GetBoardLabelByName(labelName);
    const labelId = label.id;

Get Board Label Color By Name

    const label = await trello.GetBoardLabelByName(labelName);
    const labelColor = label.color;

Update Board Label

    await trello.UpdateBoardLabel('Board ID', 'label');

Update Board Label Names

    await trello.UpdateBoardLabelNames('Board ID', ['labelName1', 'labelName2']);

Update Board Label Descriptions

    await trello.UpdateBoardLabelDescriptions('Board ID', ['labelDescription1', 'labelDescription2'];);

Update Board Label Colors

    await trello.UpdateBoardLabelColors('Board ID', ['labelColor1', 'labelColor2']);

Update Board Label Closed

    await trello.UpdateBoardLabelClosed('Board ID', [true, false]);

Update Board Label Archived

    await trello.UpdateBoardLabelArchived('Board ID', [true, false]);

Update Board Label Pos

    await trello.UpdateBoardLabelPos('Board ID', newBoardLabelPos);

Delete Board Label

    await trello.DeleteBoardLabel(labelid);

**Members**

Get All Board Members

    const members = await trello.GetBoardMembers('Board ID');

Get All Board Member ID's

    const members = await trello.GetBoardMembers('Board ID');
    const memberIds = members.map(member => member.id);

Get All Board Member Names

    const members = await trello.GetBoardMembers('Board ID');
    const memberNames = members.map(member => member.fullName);

Get Board Member By ID

    const member = await trello.GetBoardMembersById(memberId);

Get Board Member Name By ID

    const member = await trello.GetBoardMembersById(memberId);
    const memberName = member.fullName;

Get Board Member By Name

    const member = await trello.GetBoardMembersByName(memberName);
    const memberId = member.id;

Get Board Member ID by Name

    const member = await trello.GetBoardMembersByName(memberName);
    const memberId = member.id;

Get Board Member Avatar By ID

    const member = await trello.GetBoardMembersById(memberId);
    const memberAvatar = member.avatarHash;

Get Board Member Avatar By Name

    const member = await trello.GetBoardMembersByName(memberName);
    const memberAvatar = member.avatarHash;

Get Board Member Username By ID

    const member = await trello.GetBoardMembersById(memberId);
    const memberUsername = member.username;

Get Board Member Username By Name

    const member = await trello.GetBoardMembersByName(memberName);
    const memberUsername = member.username;

Get Board Member Type By ID

    const member = await trello.GetBoardMembersById(memberId);
    const memberType = member.type;

Get Board Member Type By Name

    const member = await trello.GetBoardMembersByName(memberName);
    const memberType = member.type;

Get Board Member Bio By ID

    const member = await trello.GetBoardMembersById(memberId);
    const memberBio = member.bio;

Get Board Member Bio By Name

    const member = await trello.GetBoardMembersByName(memberName);
    const memberBio = member.bio;

Get Board Member Url By ID

    const member = await trello.GetBoardMembersById(memberId);
    const memberUrl = member.url;

Get Board Member Url By Name

    const member = await trello.GetBoardMembersByName(memberName);
    const memberUrl = member.url;

Get Board Member Initials By ID

    const member = await trello.GetBoardMembersById(memberId);
    const memberInitials = member.initials;

Get Board Member Initials By Name

    const member = await trello.GetBoardMembersByName(memberName);
    const memberInitials = member.initials;

Get Board Member Status By ID

    const member = await trello.GetBoardMembersById(memberId);
    const memberStatus = member.status;

Get Board Member Status By Name

    const member = await trello.GetBoardMembersByName(memberName);
    const memberStatus = member.status;

Invite Board Member By Email

    const member = await trello.InviteBoardMemberByEmail('Board ID', memberEmail);

Invite Board Member By ID

    const member = await trello.InviteBoardMemberById('Board ID', memberId);

Invite Board Member By Name

    const member = await trello.InviteBoardMemberByName('Board ID', memberName);

Update Board Member Names

    await trello.UpdateBoardMemberNames('Board ID', ['memberName1', 'memberName2']);

Update Board Member Bio

    const member = await trello.UpdateBoardMemberBio(memberId, memberBio);

Remove Board Member

    await trello.RemoveBoardMember('Board ID', memberId);
