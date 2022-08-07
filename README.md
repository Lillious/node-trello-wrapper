# nodejs-trello-api
A NodeJS API for Trello

# Usage
    import * as trello from './node-trello-api.js';

# Documentation

**Organizations**

Get All organizations

    const organization = await trello.GetOrganizations();

Get All organization ID's

    const organization = await trello.GetOrganizations();
    const organizationIds = organization.map(org => org.id);

Get All organization Names

    const organization = await trello.GetOrganizations();
    const organizationNames = organization.map(org => org.name);

Get All organization Boards

    const organization = await trello.GetOrganizations();
    const organizationBoards = organization.map(org => org.boards);

Get All organization Boards ID's

    const organization = await trello.GetOrganizations();
    const organizationBoardsIds = organization.map(org => org.boards.map(board => board.id));

Get All organization Boards Names

    const organization = await trello.GetOrganizations();
    const organizationBoardsNames = organization.map(org => org.boards.map(board => board.name));

Get All organization Boards Lists

    const organization = await trello.GetOrganizations();
    const organizationBoardsLists = organization.map(org => org.boards.map(board => board.lists));

Get All organization Boards Lists ID's

    const organization = await trello.GetOrganizations();
    const organizationBoardsListsIds = organization.map(org => org.boards.map(board => board.lists.map(list => list.id)));

Get All organization Boards Lists Names
    
    const organization = await trello.GetOrganizations();
    const organizationBoardsListsNames = organization.map(org => org.boards.map(board => board.lists.map(list => list.name)));

Get All organization Boards Lists Cards

    const organization = await trello.GetOrganizations();
    const organizationBoardsListsCards = organization.map(org => org.boards.map(board => board.lists.map(list => list.cards)));

Get All organization Boards Lists Cards ID's

    const organization = await trello.GetOrganizations();
    const organizationBoardsListsCardsIds = organization.map(org => org.boards.map(board => board.lists.map(list => list.cards.map(card => card.id))));

Get All organization Boards Lists Cards Names

    const organization = await trello.GetOrganizations();
    const organizationBoardsListsCardsNames = organization.map(org => org.boards.map(board => board.lists.map(list => list.cards.map(card => card.name))));

Get All organization Boards Lists Cards Checklists
        
    const organization = await trello.GetOrganizations();
    const organizationBoardsListsCardsChecklists = organization.map(org => org.boards.map(board => board.lists.map(list => list.cards.map(card => card.checklists))));

Get All organization Boards Lists Cards Checklists ID's

    const organization = await trello.GetOrganizations();
    const organizationBoardsListsCardsChecklistsIds = organization.map(org => org.boards.map(board => board.lists.map(list => list.cards.map(card => card.checklists.map(checklist => checklist.id)))));

Get All organization Boards Lists Cards Checklists Names

    const organization = await trello.GetOrganizations();
    const organizationBoardsListsCardsChecklistsNames = organization.map(org => org.boards.map(board => board.lists.map(list => list.cards.map(card => card.checklists.map(checklist => checklist.name)))));

Get All organization Boards Lists Cards Checklists Items

    const organization = await trello.GetOrganizations();
    const organizationBoardsListsCardsChecklistsItems = organization.map(org => org.boards.map(board => board.boards.map(list => list.cards.map(card => card.checklists.map(checklist => checklist.items)))));

Get All organization Boards Lists Cards Checklists Items ID's

    const organization = await trello.GetOrganizations();
    const organizationBoardsListsCardsChecklistsItemsIds = organization.map(org => org.boards.map(board => board.boards.map(list => list.cards.map(card => card.checklists.map(checklist => checklist.items.map(item => item.id))))));
    
Get organization by ID
        
    const organization = await trello.getOrganizationById('id');

Get organization by Name
        
    const organization = await trello.getOrganizationByName('name');

**Boards**

Get All Trello Boards

    const boards await trello.GetBoards();
    
Get All Trello Board ID's

    const boards = await trello.GetBoards();
    const boardIds = boards.map(board => board.id);

Get All Trello Board Names
    
    const boards = await trello.GetBoards();
    const boardNames = boards.map(board => board.name);

Get Board by ID

    const board = await trello.GetBoardById(boardId);

Get Board Name by ID

    const board = await trello.GetBoardById(boardId);
    const boardName = board.name;

Update Board Name

    await trello.UpdateBoardName(boardid, 'New Board Name');

Update Board Description

    await trello.UpdateBoardDescription(boardid, 'New Board Description');
        
Update Board Closed

    await trello.UpdateBoardClosed(boardid, [true, false]);
    
Update Board Archived
    
    await trello.UpdateBoardArchived(boardid, [true, false]);
    
Update Board Pinned
    
    await trello.UpdateBoardPinned(boardid, [true, false]);

Update Board Pos

    await trello.UpdateBoardPos(boardid, newBoardPos);

Create Board
    const newBoard = await trello.CreateBoard('New Board Name');

Delete Board

    await trello.DeleteBoard(boardId);
        
**Memberships**

Get All Trello Board Memberships

    const memberships = await trello.GetBoardMemberships(boardId);

Get All Trello Board Membership IDs

    const memberships = await trello.GetBoardMemberships(boardId);
    const membershipIds = memberships.map(membership => membership.id);

Get All Trello Board Membership Names

    const memberships = await trello.GetBoardMemberships(boardId);
    const membershipNames = memberships.map(membership => membership.fullName);

Get All Trello Board Membership Emails

    const memberships = await trello.GetBoardMemberships(boardId);
    const membershipEmails = memberships.map(membership => membership.email);

Get All Trello Board Membership IDs by Email

    const memberships = await trello.GetBoardMemberships(boardId);
    const membershipIds = memberships.map(membership => membership.id);
    const membershipIdsByEmail = membershipIds.map(membershipId => {
        const membership = await trello.GetBoardMemberships(boardId);
        const membershipEmail = membership.email;
        return membershipId;
    }).filter(membershipId => membershipId !== undefined);
    
Get All Trello Board Membership Names by Email

    const memberships = await trello.GetBoardMemberships(boardId);
    const membershipNames = memberships.map(membership => membership.fullName);
    const membershipNamesByEmail = membershipNames.map(membershipName => {
        const membership = await trello.GetBoardMemberships(boardId);
        const membershipEmail = membership.email;
        return membershipName;
    }).filter(membershipName => membershipName !== undefined);

Get All Trello Board Membership Emails by ID

    const memberships = await trello.GetBoardMemberships(boardId);
    const membershipEmails = memberships.map(membership => membership.email);
    const membershipEmailsById = membershipEmails.map(membershipEmail => {
        const membership = await trello.GetBoardMemberships(boardId);
        const membershipId = membership.id;
        return membershipEmail;
    }).filter(membershipEmail => membershipEmail !== undefined);

Get All Trello Board Membership IDs by ID

    const memberships = await trello.GetBoardMemberships(boardId);
    const membershipIds = memberships.map(membership => membership.id);
    const membershipIdsById = membershipIds.map(membershipId => {
        const membership = await trello.GetBoardMemberships(boardId);
        const membershipId = membership.id;
        return membershipId;
    }).filter(membershipId => membershipId !== undefined);

Get All Trello Board Membership Names by ID

    const memberships = await trello.GetBoardMemberships(boardId);
    const membershipNames = memberships.map(membership => membership.fullName);
    const membershipNamesById = membershipNames.map(membershipName => {
        const membership = await trello.GetBoardMemberships(boardId);
        const membershipId = membership.id;
        return membershipName;
    }).filter(membershipName => membershipName !== undefined);
    
Get All Trello Board Membership Emails by Name

    const memberships = await trello.GetBoardMemberships(boardId);
    const membershipEmails = memberships.map(membership => membership.email);
    const membershipEmailsByName = membershipEmails.map(membershipEmail => {
        const membership = await trello.GetBoardMemberships(boardId);
        const membershipName = membership.fullName;
        return membershipEmail;
    }).filter(membershipEmail => membershipEmail !== undefined);
    
Get All Trello Board Membership IDs by Name

    const memberships = await trello.GetBoardMemberships(boardId);
    const membershipIds = memberships.map(membership => membership.id);
    const membershipIdsByName = membershipIds.map(membershipId => {
        const membership = await trello.GetBoardMemberships(boardId);
        const membershipName = membership.fullName;
        return membershipId;
    }).filter(membershipId => membershipId !== undefined);

Get All Trello Board Membership Names by Name

    const memberships = await trello.GetBoardMemberships(boardId);
    const membershipNames = memberships.map(membership => membership.fullName);
    const membershipNamesByName = membershipNames.map(membershipName => {
        const membership = await trello.GetBoardMemberships(boardId);
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

Update Board Membership by ID

    const membership = await trello.GetBoardMembershipById(membershipId);
    const newMembershipName = 'New Membership Name';
    const newMembershipEmail = 'New Membership Email';
    await trello.UpdateBoardMembership(membership, newMembershipName, newMembershipEmail);

Update Board Membership by Email

    const membership = await trello.GetBoardMembershipByEmail(membershipEmail);
    const newMembershipName = 'New Membership Name';
    const newMembershipEmail = 'New Membership Email';
    await trello.UpdateBoardMembership(membership, newMembershipName, newMembershipEmail);

Update Board Membership by Name

    const membership = await trello.GetBoardMembershipByName(membershipName);
    const newMembershipName = 'New Membership Name';
    const newMembershipEmail = 'New Membership Email';
    await trello.UpdateBoardMembership(membership, newMembershipName, newMembershipEmail);

Delete Board Membership

    const membership = await trello.GetBoardMembershipById(membershipId);
    await trello.DeleteBoardMembership(membership);

**Cards**

Get All Board Cards

    const cards = await trello.GetBoardCards(boardId);

Get All Board Card ID's;

    const cards = await trello.GetBoardCards(boardId);
    const cardIds = cards.map(card => card.id);

Get All Board Card Names

    const cards = await trello.GetBoardCards(boardId);
    const cardNames = cards.map(card => card.name);

Get Board Card by ID

    const card = await trello.GetBoardCardsById(cardId);
    
Get Board Card Name by ID

    const card = await trello.GetBoardCardsById(cardId);
    const cardName = card.name;

Get Board Card by Name

    const card = await trello.GetBoardCardsByName(cardName);    
    const cardId = card.id;

Update Board Card Names

    await trello.UpdateBoardCardName(boardid, ['cardName1', 'cardName2']);
    
Update Board Card Descriptions

    await trello.UpdateBoardCardDescription(boardid, ['cardDescription1', 'cardDescription2']);

Update Board Card Positions

    await trello.UpdateBoardCardPosition(boardid, [1, 2]);

Update Board Card Closed 

    await trello.UpdateBoardCardClosed(boardid, [true, false]);
    
Delete Board Card

    await trello.DeleteBoardCard(cardid);

**Lists**

Get All Board Lists

    const lists = await trello.GetBoardLists(boardId);

Get All Board List ID's

    const lists = await trello.GetBoardLists(boardId);
    const listIds = lists.map(list => list.id);

Get All Board List Names

    const lists = await trello.GetBoardLists(boardId);
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

    await trello.UpdateBoardListName(boardid, 'New List Name');

Update Board List Position

    await trello.UpdateBoardListPosition(boardid, newBoardListPosition);

Update Board List Closed

    await trello.UpdateBoardListClosed(boardid, [true, false]);

Update List Descripion

    await trello.UpdateListDescription(listid, 'New List Description');

Delete Board List

    await trello.DeleteBoardList(listid);

**Checklists**

Get All Board Checklists

    const checklists = await trello.GetBoardChecklists(boardId);

Get All Board Checklist ID's

    const checklists = await trello.GetBoardChecklists(boardId);
    const checklistIds = checklists.map(checklist => checklist.id);

Get All Board Checklist Names

    const checklists = await trello.GetBoardChecklists(boardId);
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

    const checklistItem = await trello.GetBoardChecklistItemsById(checklistItemId);

Get Board Checklist Item Name By ID

    const checklistItem = await trello.GetBoardChecklistItemsById(checklistItemId);
    const checklistItemName = checklistItem.name;    

Get Board Checklist Item By Name

    const checklistItem = await trello.GetBoardChecklistsItemsByName(checklistItemName);
    const checklistItemId = checklistItem.id;

Get Board Checklist Item ID by Name

    const checklistItem = await trello.GetBoardChecklistsItemsByName(checklistItemName);
    const checklistItemId = checklistItem.id;

Get Board Checklist Item By Name

    const checklistItem = await trello.GetBoardChecklistsItemsByName(checklistItemName);
    const checklistItemId = checklistItem.id;

Get Board Checklist Item ID by Name

    const checklistItem = await trello.GetBoardChecklistsItemsByName(checklistItemName);
    const checklistItemId = checklistItem.id;

Update Board Checklist Item Name

    await trello.UpdateBoardChecklistItemName(checklistItemid, newChecklistItemName);

Update Board Checklist Item Position

    await trello.UpdateBoardChecklistItemPosition(checklistItemid, newChecklistItemPosition);

Update Board Checklist Item State

    await trello.UpdateBoardChecklistItemState(checklistItemId, newChecklistItemState);

Update Board Checklist Item Descripion

    await trello.UpdateBoardChecklistItemDescription(checklistItemid, 'New Description');

Delete Board Checklist

    await trello.DeleteBoardChecklist(checklistid);

**Labels**

Get All Board Labels

    const labels = await trello.GetBoardLabels(boardId);

Get All Board Label ID's

    const labels = await trello.GetBoardLabels(boardId);
    const labelIds = labels.map(label => label.id);

Get All Board Label Names

    const labels = await trello.GetBoardLabels(boardId);
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

    await trello.UpdateBoardLabel(boardId, 'label');

Update Board Label Names

    await trello.UpdateBoardLabelNames(boardId, ['labelName1', 'labelName2']);

Update Board Label Descriptions

    await trello.UpdateBoardLabelDescriptions(boardId, ['labelDescription1', 'labelDescription2'];);

Update Board Label Colors

    await trello.UpdateBoardLabelColors(boardId, ['labelColor1', 'labelColor2']);

Update Board Label Closed

    await trello.UpdateBoardLabelClosed(boardId, [true, false]);

Update Board Label Archived

    await trello.UpdateBoardLabelArchived(boardId, [true, false]);

Update Board Label Pos

    await trello.UpdateBoardLabelPos(boardId, newBoardLabelPos);

Delete Board Label

    await trello.DeleteBoardLabel(labelid);

**Members**

Get All Board Members

    const members = await trello.GetBoardMembers(boardId);

Get All Board Member ID's

    const members = await trello.GetBoardMembers(boardId);
    const memberIds = members.map(member => member.id);

Get All Board Member Names

    const members = await trello.GetBoardMembers(boardId);
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

    const member = await trello.InviteBoardMemberByEmail(boardId, memberEmail);

Invite Board Member By ID

    const member = await trello.InviteBoardMemberById(boardId, memberId);

Invite Board Member By Name

    const member = await trello.InviteBoardMemberByName(boardId, memberName);

Update Board Member Names

    await trello.UpdateBoardMemberNames(boardId, ['memberName1', 'memberName2']);

Update Board Member Bio

    const member = await trello.UpdateBoardMemberBio(memberId, memberBio);

Remove Board Member

    await trello.RemoveBoardMember(boardId, memberId);
