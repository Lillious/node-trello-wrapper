// NodeJS Trello API - By: @lilliousdev

import 'dotenv/config';
import fetch from 'node-fetch';

// Check for required environment variables
if (!process.env.TRELLO_API_KEY) err('TRELLO_API_KEY is not set');
if (!process.env.TRELLO_OAUTH_TOKEN) err('TRELLO_OAUTH_TOKEN is not set');

const err = (message) => {
	message = `\x1b[31m${message}\x1b[0m`;
	throw new Error(message);
}

const fetchasync = async (url, method, headers) => {
	if (method != 'GET' && method != 'POST' && method != 'DELETE' && method != 'PUT') err('Invalid request type');
	const response = await fetch(url, {
		method: method,
		headers: headers
	});
	const body = await response.json();
	if (response.status != 200) err('There was an error receiving data from the remote server.');
	if (!body) err('There was no data received from the remote server.');
	return body;
};

/* GET */

export const GetOrganizations = async () => {
	const response = fetchasync(`https://api.trello.com/1/members/me/organizations?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const GetOrganizationsById = async (id) => {
	const response = fetchasync(`https://api.trello.com/1/organizations/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const getOrganizationByName = async (name) => {
	const response = fetchasync(`https://api.trello.com/1/organizations/search?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}&query=${name}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}


export const GetBoards = async () => {
	const response = fetchasync(`https://api.trello.com/1/members/me/boards?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardById = async (id) => {
	if (!id) err('No board ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
};

export const GetBoardCards = async (id) => {
	if (!id) err('No board ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}/cards?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardCardsById = async (id) => {
	if (!id) err('No card ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/cards${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardCardsByName = async (name) => {
	if (!name) err('No card name was provided.');
	const response = fetchasync(`https://api.trello.com/1/search?query=${name}&key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardMemberships = async (id) => {
	if (!id) err('No board ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}/memberships?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardMembershipById = async (id) => {
	if (!id) err('No membership ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/memberships/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardMembershipByEmail = async (id, email) => {
	if (!id) err('No board ID was provided.');
	if (!email) err('No email was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}/memberships?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		for (let i = 0; i < body.length; i++) {
			if (body[i].member.email == email) return body[i];
		}
		return false;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardMembershipByName = async (id, name) => {
	if (!id) err('No board ID was provided.');
	if (!name) err('No name was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}/memberships?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		for (let i = 0; i < body.length; i++) {
			if (body[i].member.fullName == name) return body[i];
		}
		return false;
	}).catch((error) => {
		err(error);
	});
	return response;
}


export const GetBoardLists = async (id) => {
	if (!id) err('No board ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}/lists?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardListsById = async (id) => {
	if (!id) err('No list ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/lists/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardListsByName = async (name) => {
	if (!name) err('No list name was provided.');
	const response = fetchasync(`https://api.trello.com/1/search?query=${name}&key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardMembers = async (id) => {
	if (!id) err('No board ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}/members?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardMemberById = async (id) => {
	if (!id) err('No member ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/members/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardMembersByName = async (name) => {
	if (!name) err('No member name was provided.');
	const response = fetchasync(`https://api.trello.com/1/search?query=${name}&key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardChecklists = async (id) => {
	if (!id) err('No board ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}/checklists?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardChecklistsById = async (id) => {
	if (!id) err('No checklist ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/checklists/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardChecklistsByName = async (name) => {
	if (!name) err('No checklist name was provided.');
	const response = fetchasync(`https://api.trello.com/1/search?query=${name}&key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardChecklistItems = async (id) => {
	if (!id) err('No checklist ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/checklists/${id}/checkItems?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardChecklistItemsById = async (id) => {
	if (!id) err('No checklist item ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/checklists/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardChecklistItemsByName = async (name) => {
	if (!name) err('No checklist item name was provided.');
	const response = fetchasync(`https://api.trello.com/1/search?query=${name}&key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardLabels = async (id) => {
	if (!id) err('No board ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}/labels?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardLabelById = async (id) => {
	if (!id) err('No label ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/labels/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	})
	.catch((error) => {
		err(error);
	});
	return response;
}

export const GetBoardLabelByName = async (name) => {
	if (!name) err('No label name was provided.');
	const response = fetchasync(`https://api.trello.com/1/search?query=${name}&key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}


export const InviteMemberToBoardByName = async (name, email) => {
	if (!name) err('No board name was provided.');
	if (!email) err('No email was provided.');
	const response = fetchasync(`https://api.trello.com/1/search?query=${name}&key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'GET', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

/* PUT */

export const UpdateBoard = async (id, name, desc, closed) => {
	if (!id) err('No board ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'name': name, 'desc': desc, 'closed': closed })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardName = async (id, name) => {
	if (!id) err('No board ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'name': name })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardDesc = async (id, desc) => {
	if (!id) err('No board ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'desc': desc })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardClosed = async (id, closed) => {
	if (!id) err('No board ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'closed': closed })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardArchived = async (id, archived) => {
	if (!id) err('No board ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'archived': archived })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardPinned = async (id, pinned) => {
	if (!id) err('No board ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'pinned': pinned })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardPos = async (id, pos) => {
	if (!id) err('No board ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'pos': pos })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardCard = async (id, name, desc, closed) => {
	if (!id) err('No card ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/cards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'name': name, 'desc': desc, 'closed': closed })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardCardName = async (id, name) => {
	if (!id) err('No card ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/cards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'name': name })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardCardDescription = async (id, desc) => {
	if (!id) err('No card ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/cards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'desc': desc })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardCardPosition = async (id, pos) => {
	if (!id) err('No card ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/cards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'pos': pos })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardCardClosed = async (id, closed) => {
	if (!id) err('No card ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/cards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'closed': closed })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardLabel = async (id, name, desc, closed) => {
	if (!id) err('No label ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/labels/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'name': name, 'desc': desc, 'closed': closed })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardLabelNames = async (id, name) => {
	if (!id) err('No label ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/labels/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'name': name })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardLabelDescriptions = async (id, desc) => {
	if (!id) err('No label ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/labels/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'desc': desc })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardLabelColors = async (id, color) => {
	if (!id) err('No label ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/labels/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'color': color })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardLabelClosed = async (id, closed) => {
	if (!id) err('No label ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/labels/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'closed': closed })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardLabelArchived = async (id, archived) => {
	if (!id) err('No label ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/labels/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'archived': archived })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardLabelPos = async (id, pos) => {
	if (!id) err('No label ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/labels/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'pos': pos })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardList = async (id, name, desc, closed) => {
	if (!id) err('No list ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/lists/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'name': name, 'desc': desc, 'closed': closed })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardMember = async (id, name, desc, closed) => {
	if (!id) err('No member ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/members/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'name': name, 'desc': desc, 'closed': closed })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardMembership = async (id, name, desc, closed) => {
	if (!id) err('No member ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/memberships/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'name': name, 'desc': desc, 'closed': closed })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardMemberBio = async (id, bio) => {
	if (!id) err('No member ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/members/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'bio': bio })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardListName = async (id, name) => {
	if (!id) err('No list ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/lists/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'name': name })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardListPosition = async (id, pos) => {
	if (!id) err('No list ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/lists/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'pos': pos })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardListClosed = async (id, closed) => {
	if (!id) err('No list ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/lists/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'closed': closed })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardListDesc = async (id, desc) => {
	if (!id) err('No list ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/lists/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'desc': desc })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardChecklistItemName = async (id, name) => {
	if (!id) err('No checklist item ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/checklists/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'name': name })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardChecklistItemPos = async (id, pos) => {
	if (!id) err('No checklist item ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/checklists/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'pos': pos })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardChecklistItemState = async (id, state) => {
	if (!id) err('No checklist item ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/checklists/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'state': state })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const UpdateBoardChecklistItemDesc = async (id, desc) => {
	if (!id) err('No checklist item ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/checklists/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'PUT', { 'Content-Type': 'application/json', 'desc': desc })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

/* POST */

export const CreateBoard = async (name, desc, idOrganization, closed) => {
	if (!name) err('No board name was provided.');
	if (!idOrganization) err('No organization ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'POST', { 'Content-Type': 'application/json', 'name': name, 'desc': desc, 'idOrganization': idOrganization, 'closed': closed })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const InviteMemberToBoardByEmail = async (id, email) => {
	if (!id) err('No board ID was provided.');
	if (!email) err('No email was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}/members?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'POST', { 'Content-Type': 'application/json', 'email': email })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const InviteMemberToBoardByID = async (id, email) => {
	if (!id) err('No board ID was provided.');
	if (!email) err('No email was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}/members?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'POST', { 'Content-Type': 'application/json', 'email': email })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

/* DELETE */

export const DeleteBoard = async (id) => {
	if (!id) err('No board ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/boards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'DELETE')
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const DeleteBoardMembership = async (id) => {
	if (!id) err('No member ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/memberships/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'DELETE', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const DeleteBoardCard = async (id) => {
	if (!id) err('No card ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/cards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'DELETE', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const DeleteBoardList = async (id) => {
	if (!id) err('No list ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/lists/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'DELETE', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const DeleteBoardChecklist = async (id) => {
	if (!id) err('No checklist ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/checklists/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'DELETE', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

export const DeleteBoardLabel = async (id) => {
	if (!id) err('No label ID was provided.');
	const response = fetchasync(`https://api.trello.com/1/labels/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_OAUTH_TOKEN}`, 'DELETE', { 'Content-Type': 'application/json' })
	.then((body) => {
		return body;
	}).catch((error) => {
		err(error);
	});
	return response;
}

