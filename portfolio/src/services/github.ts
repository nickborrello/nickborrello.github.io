export async function getUserProfile(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user profile: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

export async function getLatestActivity(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/events/public?per_page=1`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user activity: ${response.status} ${response.statusText}`);
    }
    const events = await response.json();
    return events.length > 0 ? events[0] : null;
  } catch (error) {
    console.error('Error fetching latest activity:', error);
    return null;
  }
}