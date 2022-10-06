A NodeJS API Wrapper for Trello

# Installation
    npm i node-trello-wrapper

# Usage
    import * as trello from 'node-trello-wrapper';

# Required Environment Variables
    TRELLO_API_KEY
    TRELLO_OAUTH_TOKEN

# Documentation

**Organizations**

Get All organizations

    await trello.GetAllOrganizations();

Get All organization Boards

    const organization = await trello.GetAllOrganizations();
    const organizationBoards = organization.map(org => org.boards);

Get All organization Boards Lists

    const organization = await trello.GetAllOrganizations();
    const organizationBoardsLists = organization.map(org => org.boards.map(board => board.lists));

Get All organization Boards Lists Cards Checklists
        
    const organization = await trello.GetAllOrganizations();
    const organizationBoardsListsCardsChecklists = organization.map(org => org.boards.map(board => board.lists.map(list => list.cards.map(card => card.checklists))));

Get All organization Boards Lists Cards Checklists Items

    const organization = await trello.GetAllOrganizations();
    const organizationBoardsListsCardsChecklistsItems = organization.map(org => org.boards.map(board => board.boards.map(list => list.cards.map(card => card.checklists.map(checklist => checklist.items)))));

Get organization
        
    await trello.GetOrganization('Organization ID');

Create organization

    await trello.CreateOrganization('Organization Name');

Delete organization

    await trello.DeleteOrganization('Organization ID');

**Boards**

Get All Trello Boards

    await trello.GetAllBoards();

Get Board

    await trello.GetBoard('Board ID');

Update Board Name

    await trello.UpdateBoardName('Board ID', 'New Board Name');

Update Board Description

    await trello.UpdateBoardDescription('Board ID', 'New Board Description');
    
Archive Board
    
    await trello.ArchiveBoard('Board ID');

UnArchive Board
    
    await trello.UnArchiveBoard('Board ID');
    
Update Board Pinned
    
    await trello.UpdateBoardPinned('Board ID', [true, false]);

Update Board Pos

    await trello.UpdateBoardPos('Board ID', 'New Board Position');

Create Board

    await trello.CreateBoard('Board Name', 'Organization ID');

Delete Board

    await trello.DeleteBoard('Board ID');

Get Board Webhook

    await trello.GetBoardWebhook('Webhook ID');
        
Create Board Webhook

    await trello.CreateBoardWebhook('Board ID', 'Callback URL');

Delete Board Webhook

    await trello.DeleteBoardWebHook('Webhook ID');

**Memberships**

Get All Trello Board Memberships

    await trello.GetBoardMemberships('Board ID');

Get Board Membership by ID

    await trello.GetBoardMembershipById(membershipId);
    
Get Board Membership by Email

    await trello.GetBoardMembershipByEmail(membershipEmail);

Get Board Membership by Name

    await trello.GetBoardMembershipByName(membershipName);

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

    await trello.GetBoardCards('Board ID');

Get Board Card by ID

    await trello.GetBoardCardsById('Card ID');

Update Board Card Names

    await trello.UpdateBoardCardName('Board ID', ['cardName1', 'cardName2']);
    
Update Board Card Descriptions

    await trello.UpdateBoardCardDescription('Board ID', ['cardDescription1', 'cardDescription2']);

Update Board Card Positions

    await trello.UpdateBoardCardPosition('Board ID', [1, 2]);

Archive Card

    await trello.ArchiveCard('Board ID');

UnArchive Card

    await trello.UnArchiveCard('Board ID');
    
Create Board Card

    await trello.CreateCard('Card Name', 'Description', 'List ID');

Delete Card

    await trello.DeleteCard('Card ID');

**Lists**

Get All Board Lists

    await trello.GetBoardLists('Board ID');

Get Board List By ID

    await trello.GetBoardListsById(listId);

Update Board List Name

    await trello.UpdateBoardListName('Board ID', 'New List Name');

Update Board List Position

    await trello.UpdateBoardListPosition('Board ID', newBoardListPosition);

Update List Descripion

    await trello.UpdateListDescription(listid, 'New List Description');

Create Board List

    await trello.CreateList('List Name', 'Board ID');

Archive List

    await trello.ArchiveList(listid);

UnArchive List

    await trello.UnArchiveList(listid);

**Checklists**

Get All Checklists

    await trello.GetBoardChecklists('Board ID');
    
Get Checklist By ID

    await trello.GetBoardChecklists('Board ID');

Get Checklist Items

    await trello.GetChecklistItems('Checklist ID');

Update Checklist Item Name

    await trello.UpdateBoardChecklistItemName('Checklist Item ID', 'New Checklist Item Name');

Update Checklist Item Position

    await trello.UpdateBoardChecklistItemPosition('Checklist Item ID', newChecklistItemPosition);

Update Checklist Item State

    await trello.UpdateBoardChecklistItemState('Checklist Item ID', newChecklistItemState);

Update Checklist Item Descripion

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

    await trello.GetBoardLabels('Board ID');

Get Board Label By ID

    await trello.GetBoardLabelById(labelId);

Update Board Label

    await trello.UpdateBoardLabel('Board ID', 'label');

Update Board Label Names

    await trello.UpdateBoardLabelNames('Board ID', ['labelName1', 'labelName2']);

Update Board Label Descriptions

    await trello.UpdateBoardLabelDescriptions('Board ID', ['labelDescription1', 'labelDescription2'];);

Update Board Label Colors

    await trello.UpdateBoardLabelColors('Board ID', ['labelColor1', 'labelColor2']);

Archive Label

    await trello.ArchiveLabel('Label ID');

UnArchive Label

    await trello.UnArchiveLabel('Label ID');

Update Board Label Position

    await trello.UpdateBoardLabelPos('Board ID', newBoardLabelPos);

Delete Board Label

    await trello.DeleteBoardLabel(labelid);

**Members**

Get All Board Members

    await trello.GetBoardMembers('Board ID');

Get Board Member By ID

    await trello.GetBoardMembersById(memberId);

Invite Board Member By Email

    await trello.InviteBoardMemberByEmail('Board ID', 'Member Email');

Invite Board Member By ID

    await trello.InviteBoardMemberById('Board ID', 'Member ID');

Invite Board Member By Name

    await trello.InviteBoardMemberByName('Board ID', 'Member Name');

Remove Board Member

    await trello.RemoveBoardMember('Board ID', 'Member ID');