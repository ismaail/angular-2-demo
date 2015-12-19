/**
 * Developer Service Class
 */
class DeveloperService {
    name: string;
    skills: Array<string>;

    /**
     * Initialse DeveloperService Class
     */
    constructor() {
        this.name = "ismaail";
        this.skills = ["PHP", "NodeJS", "GIT", "Linux"];
    }
}

export { DeveloperService };
